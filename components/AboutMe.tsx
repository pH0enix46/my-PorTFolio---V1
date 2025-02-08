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
        <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border-4 shadow-lg shadow-gray-500">
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
            I&apos;m a web developer with a solid foundation in MERN Stack
            development. Currently, I&apos;m focusing on DSA and solving
            LeetCode & HackerRank challenges. I believe in clean and efficient
            code. My toolbox is filled with languages and frameworks. Thanks to
            my teacher 💕
            <a
              href="https://jonas.io/index.html"
              className="text-2xl text-purple"
              target="_blank"
            >
              Jonas Schmedtmann
            </a>{" "}
            and thanks Udemy
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/js-gifs.gif"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
              unoptimized
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-gray-400 text-center"
            >
              💞 Coding is my passion. No matter what position I&apos;m in,
              I&apos;ll always code 💞
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
// ---------- ⛔️ ⛔️ ⛔️
