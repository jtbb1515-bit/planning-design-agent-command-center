import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "傑設國際設計+詹世州建築師事務所 設計儀表板",
  description: "傑設國際設計與詹世州建築師事務所的 AI 設計任務管理儀表板。"
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
