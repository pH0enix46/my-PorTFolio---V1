// // //

import type { Metadata } from "next";
import { Itim } from "next/font/google";
import "./globals.css";

// GOOGLE `ITIM` FONT ---------- ✅ ✅ ✅
const itim = Itim({
  variable: "--font-itim",
  subsets: ["latin"],
  weight: "400",
});
// ---------- ⛔️ ⛔️ ⛔️

// TITLE ---------- ✅ ✅ ✅
export const metadata: Metadata = {
  title: "pH0enix porTFolio",
  description: "My first porTFolio, with some of my basic knowledge!",
};
// ---------- ⛔️ ⛔️ ⛔️

// ROOT LAYOUT FUNCTION ---------- ✅ ✅ ✅
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${itim.variable} antialiased`}>{children}</body>
    </html>
  );
}
// ---------- ⛔️ ⛔️ ⛔️
