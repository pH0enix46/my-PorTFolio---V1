"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

// About Me function ---------- ✅ ✅ ✅
export default function AboutMe() {
  return (
    <div id="aboutme">
      <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center relative z-10 opacity-100">
        About <span className="text-purple">Me!</span>
      </h1>
      <CardContainer className="inter-var">
        <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 py-10 border-4 shadow-lg shadow-gray-500">
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-neutral-600 dark:text-gray-300"
          >
            💞 Hello!
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-base sm:text-xl max-w-sm mt-2 dark:text-gray-300 font-bold text-center sm:text-justify"
          >
            I&apos;m a web developer with a solid foundation in Full stack
            NEXT.JS, REACT & SUPABASE. Currently, I&apos;m focusing on DSA and
            solving LeetCode challenges. My toolbox is filled with languages,
            Libraries and frameworks.{" "}
            <span className="text-pink-300">Thanks to my Teacher</span>
            <br />
            <a
              href="https://jonas.io/index.html"
              className="text-2xl text-purple"
              target="_blank"
            >
              💕💕 Jonas Schmedtmann 💕💕
            </a>
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/pH0enix--LIFE.png"
              height="1000"
              width="1000"
              className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl border-2 border-gray-500"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
// ---------- ⛔️ ⛔️ ⛔️
