// // //

"use client";
import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

// HeroDescription function ---------- ✅ ✅ ✅
export default function HeroDescription() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="uppercase tracking-widest text-[10px] md:text-sm text-blue-200 max-w-80 font-bold font-sans">
        pH0enix46 protfolio
      </h2>

      <TextGenerateEffect
        className="text-center text-[6vw] md:text-[4vw] lg:text-[3vw]"
        words="Building Scalable and High-Performance Web Applications with the MERN Stack"
      />

      <p
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } pt-6 md:pt-10 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-center transition-opacity ease-in-out duration-1000`}
      >
        Hello! I&apos;m Md Joy, a passionate Full-Stack{" "}
        <span className="text-green-700 font-bold text-base md:text-xl lg:text-3xl underline">
          M
        </span>
        <span className="text-gray-500 font-bold text-base md:text-xl lg:text-3xl underline">
          E
        </span>
        <span className="text-blue-500 font-bold text-base md:text-xl lg:text-3xl underline">
          R
        </span>
        <span className="text-green-600 font-bold text-base md:text-xl lg:text-3xl underline">
          N
        </span>{" "}
        Developer
      </p>

      <a
        href="#about"
        className={`${isVisible ? "opacity-100" : "opacity-0"} mt-10`}
      >
        <MagicButton
          title="Show my work"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
  );
}
// ---------- ⛔️ ⛔️ ⛔️
