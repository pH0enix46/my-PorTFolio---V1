// // //

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

// Motivation function ---------- ✅ ✅ ✅
export default function Motivation() {
  return (
    <div className="py-20 mt-10 md:mt-20" id="projects">
      <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        Some of the Visionaries <br />
        <span className="text-purple">Who Inspire My Coding Journey!</span>
      </h1>
      <div className="flex flex-col items-center mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}
// ---------- ⛔️ ⛔️ ⛔️
