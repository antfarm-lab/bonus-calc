import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ボーナス手取り計算ツール｜賞与の控除額と手取り額を自動計算",
  description:
    "ボーナス支給額から社会保険料や税金を差し引いた手取り額を簡単に計算できる無料ツールです。",
  keywords: [
    "ボーナス 手取り",
    "賞与 手取り 計算",
    "ボーナス 計算",
    "賞与 控除",
    "ボーナス 税金",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}