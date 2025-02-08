/* eslint-disable @next/next/no-img-element */
// // //

import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

// Recent Project function ---------- ✅ ✅ ✅
export default function RecentProjects() {
  return (
    <div className="py-20 mt-10 md:mt-20" id="projects">
      <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        Here are some of my best projects that <br />
        <span className="text-purple">I&apos;m proud of!</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 lg:mt-10 sm:border-2 sm:rounded-2xl sm:shadow-xl sm:shadow-gray-600 mt-2">
        {projects.map(({ id, title, des, img, iconLists, link }) => {
          return (
            <div
              key={id}
              className="h-[32rem] sm:h-[41rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-2">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg-png" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0 rounded-xl object-cover h-full w-full overflow-hidden border-2 border-gray-600"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 uppercase text-blue-400">
                  {title}
                </h1>

                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-3">
                  {des}
                </p>

                <div className="flex justify-between items-center mt-7 mb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {iconLists.map((icon, i) => (
                        <div
                          key={icon}
                          className="border-2 border-gray-700 rounded-full bg-black w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex justify-center items-center"
                          style={{ transform: `translateX(-${5 * i * 2}px)` }}
                        >
                          <img src={icon} alt={icon} className="p-1" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-base sm:text-sm text-xs text-purple">
                      Check! Live Site
                    </p>
                    <FaLocationArrow
                      className="ms-3 -translate-x-1"
                      color="#cbacf9"
                    />
                  </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// ---------- ⛔️ ⛔️ ⛔️
