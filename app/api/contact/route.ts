import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMaxRequests = 5;
const requestLog = new Map<string, number[]>();
const rateLimitWindowMinutes = Math.ceil(rateLimitWindowMs / (60 * 1000));

const hasUpstashConfig =
  Boolean(process.env.UPSTASH_REDIS_REST_URL) && Boolean(process.env.UPSTASH_REDIS_REST_TOKEN);

const distributedRatelimit = hasUpstashConfig
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(rateLimitMaxRequests, `${rateLimitWindowMinutes} m`),
      analytics: true,
      prefix: "dkmstack:contact"
    })
  : null;

function cleanupRequestLog(now: number) {
  for (const [clientId, timestamps] of requestLog.entries()) {
    const recent = timestamps.filter((stamp) => now - stamp <= rateLimitWindowMs);
    if (recent.length === 0) {
      requestLog.delete(clientId);
      continue;
    }
    requestLog.set(clientId, recent);
  }
}

function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function checkRateLimit(clientId: string) {
  const now = Date.now();
  cleanupRequestLog(now);
  const timestamps = requestLog.get(clientId) ?? [];
  const recent = timestamps;

  if (recent.length >= rateLimitMaxRequests) {
    const oldestRecent = recent[0] ?? now;
    const retryAfterMs = Math.max(0, rateLimitWindowMs - (now - oldestRecent));
    return { limited: true, retryAfterSeconds: Math.ceil(retryAfterMs / 1000) };
  }

  recent.push(now);
  requestLog.set(clientId, recent);
  return { limited: false, retryAfterSeconds: 0 };
}

async function checkDistributedRateLimit(clientId: string) {
  if (!distributedRatelimit) {
    return null;
  }
  const result = await distributedRatelimit.limit(clientId);
  const resetSeconds = Math.max(1, Math.ceil((result.reset - Date.now()) / 1000));
  return { limited: !result.success, retryAfterSeconds: resetSeconds };
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactBody;
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const website = body.website?.trim() ?? "";
  const clientId = getClientIdentifier(request);

  // Honeypot field. Real users should leave this empty.
  if (website.length > 0) {
    console.warn(
      JSON.stringify({
        event: "contact_honeypot_triggered",
        clientId
      })
    );
    return NextResponse.json({ ok: true, message: "Message received." }, { status: 200 });
  }

  let rateLimit = await checkDistributedRateLimit(clientId);
  if (!rateLimit) {
    rateLimit = checkRateLimit(clientId);
    console.warn(
      JSON.stringify({
        event: "contact_rate_limit_fallback_local",
        reason: "missing_upstash_env"
      })
    );
  }

  if (rateLimit.limited) {
    console.warn(
      JSON.stringify({
        event: "contact_rate_limited",
        clientId,
        retryAfterSeconds: rateLimit.retryAfterSeconds
      })
    );
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes before trying again." },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfterSeconds)
        }
      }
    );
  }

  if (name.length < 2) {
    return NextResponse.json({ error: "Invalid name." }, { status: 400 });
  }
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json({ error: "Invalid message." }, { status: 400 });
  }

  console.info(
    JSON.stringify({
      event: "contact_message_received",
      clientId,
      emailDomain: email.includes("@") ? email.split("@")[1] : "unknown"
    })
  );

  // Placeholder: replace with email/CRM integration later.
  return NextResponse.json({ ok: true, message: "Message received." }, { status: 200 });
}
