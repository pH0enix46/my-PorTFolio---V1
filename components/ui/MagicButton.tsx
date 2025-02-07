// // //

import React from "react";

// https://ui.aceternity.com/components/tailwindcss-buttons

// MagicButton function ---------- ✅ ✅ ✅
export default function MagicButton({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) {
  return (
    <button
      className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border-2 border-gray-400 bg-[linear-gradient(110deg,#ffffff33,60%,#ffffffa8,75%,#ffffff33)] bg-[length:200%_100%] text-slate-400 transition-colors font-bold gap-2 w-full p-2 sm:px-6 text-sm sm:text-base lg:text-lg ${otherClasses}`}
      onClick={handleClick}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
}
// ---------- ⛔️ ⛔️ ⛔️
