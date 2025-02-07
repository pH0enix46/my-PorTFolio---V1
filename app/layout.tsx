// // //

import type { Metadata } from "next";
import { Itim } from "next/font/google";
import "./globals.css";

// Google `itim` font ---------- ✅ ✅ ✅
const itim = Itim({
  variable: "--font-itim",
  subsets: ["latin"],
  weight: "400",
});
// ---------- ⛔️ ⛔️ ⛔️

// Title ---------- ✅ ✅ ✅
export const metadata: Metadata = {
  title: "pH0enix46 porTFolio",
  description: "My first porTFolio, with some of my basic knowledge!",
};
// ---------- ⛔️ ⛔️ ⛔️

// Root Layout function ---------- ✅ ✅ ✅
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
