// // //

"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// https://ui.shadcn.com/docs/dark-mode/next

// Next.js Dark mode ---------- ✅ ✅ ✅
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
// ---------- ⛔️ ⛔️ ⛔️
