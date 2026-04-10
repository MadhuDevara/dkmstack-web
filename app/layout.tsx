import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
