import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "規劃設計部 AI Agent Command Center",
  description: "AI Agent management prototype for architecture office planning and design teams."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
