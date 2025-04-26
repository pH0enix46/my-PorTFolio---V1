// // //

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

// Motivation function ---------- ✅ ✅ ✅
export default function Motivation() {
  return (
    <div className="sm:py-20 md:mt-20">
      <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        Some of the Visionaries <br />
        <span className="text-purple">Who Inspire My Coding Journey!</span>
      </h1>
      <div className="flex flex-col items-center mt-8 lg:mt-16">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
// ---------- ⛔️ ⛔️ ⛔️
