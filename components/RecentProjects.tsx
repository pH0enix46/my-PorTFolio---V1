/* eslint-disable @next/next/no-img-element */
// // //

import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

// Recent Project function ---------- ✅ ✅ ✅
export default function RecentProjects() {
  return (
    <div className="py-20 mt-10 md:mt-20">
      <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        Here are some of my best projects that <br />
        <span className="text-purple">I&apos;m proud of!</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => {
          return (
            <div
              key={id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer title={title} href={link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg-png" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>

                <p></p>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// ---------- ⛔️ ⛔️ ⛔️
