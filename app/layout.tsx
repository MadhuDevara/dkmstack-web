import type { Metadata, Viewport } from "next";
import { BackToTopButton } from "@/components/back-to-top-button";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "DKMStack | Building Scalable Software Solutions",
  description:
    "DKMStack delivers modern web development, mobile app development, and automation testing solutions.",
  keywords: [
    "DKMStack",
    "software company",
    "web development",
    "mobile app development",
    "automation testing"
  ]
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BackToTopButton />
      </body>
    </html>
  );
}
