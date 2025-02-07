// // //

import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function HeroDescription() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="uppercase tracking-widest text-[10px] md:text-sm text-blue-200 max-w-80 font-bold">
        pH0enix46 protfolio --v1
      </h2>

      <TextGenerateEffect
        className="text-center text-[5vw] md:text-[4vw] lg:text-[3vw]"
        words="Crafting Scalable and High-Performance Web Applications with the MERN Stack"
      />
    </div>
  );
}
