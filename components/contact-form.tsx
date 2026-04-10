"use client";

import { FormEvent, useEffect, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  website: string;
};

type FormErrors = Partial<FormState>;

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    website: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [apiError, setApiError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!successMessage) {
      return;
    }
    const timeout = setTimeout(() => setSuccessMessage(""), 3500);
    return () => clearTimeout(timeout);
  }, [successMessage]);

  const validate = () => {
    const nextErrors: FormErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (trimmedName.length < 2) {
      nextErrors.name = "Please enter at least 2 characters.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (trimmedMessage.length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSuccessMessage("");
      setApiError("");
      return;
    }

    try {
      setIsSubmitting(true);
      setApiError("");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setSuccessMessage("");
        setApiError(result.error ?? "Unable to send message. Please try again.");
        return;
      }

      setSuccessMessage("Thanks for reaching out! We received your message.");
      setFormData({ name: "", email: "", message: "", website: "" });
      setErrors({});
      setApiError("");
    } catch {
      setSuccessMessage("");
      setApiError("Network error. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {successMessage ? (
        <div className="fixed right-5 top-20 z-[60] rounded-lg border border-emerald-400/30 bg-[#0F2A1F]/90 px-4 py-3 text-sm text-emerald-200 shadow-soft">
          {successMessage}
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="card space-y-4">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={formData.website}
          onChange={(event) => setFormData((prev) => ({ ...prev, website: event.target.value }))}
          className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden opacity-0"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
              className="w-full rounded-lg border border-white/15 bg-[#121722] px-4 py-3 text-sm text-white outline-none transition focus:border-accentBlue"
            />
            {errors.name ? <p className="text-xs text-rose-300">{errors.name}</p> : null}
          </div>
          <div className="space-y-1">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
              className="w-full rounded-lg border border-white/15 bg-[#121722] px-4 py-3 text-sm text-white outline-none transition focus:border-accentBlue"
            />
            {errors.email ? <p className="text-xs text-rose-300">{errors.email}</p> : null}
          </div>
        </div>
        <textarea
          name="message"
          rows={5}
          placeholder="Message"
          value={formData.message}
          onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-lg border border-white/15 bg-[#121722] px-4 py-3 text-sm text-white outline-none transition focus:border-accentBlue"
        />
        {errors.message ? <p className="text-xs text-rose-300">{errors.message}</p> : null}
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-accentBlue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {apiError ? <p className="text-xs text-rose-300">{apiError}</p> : null}
      </form>
    </>
  );
}
