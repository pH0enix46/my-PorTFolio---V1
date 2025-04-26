// // //
/* eslint-disable @next/next/no-img-element */

"use client";

import { cn } from "@/lib/utils";
import { GridGlobe } from "./GridGlobe";
import { useEffect, useState } from "react";
import styles from "./BentoGrid.module.css";
import Image from "next/image";

// https://ui.aceternity.com/components/bento-grid

// Bento Grid function ---------- ✅ ✅ ✅
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
// ---------- ⛔️ ⛔️ ⛔️

// Bento Grid Item function ---------- ✅ ✅ ✅
export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  // Logic to trigger continuous animation on image
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Start the animation when the component mounts
    setStartAnimation(true);
  }, []);

  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] overflow-hidden bg-white border-2 border-transparent justify-between flex flex-col space-y-4 relative",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div>
        <div className="w-full h-full absolute">
          {img && (
            <div>
              <Image
                src={img}
                alt={img}
                fill
                quality={90}
                className={cn(
                  imgClassName,
                  "object-cover object-center",
                  id === 1 && "w-full h-full",
                  startAnimation ? `${styles.animateHoverEffect}` : "", // Trigger animation on mount
                  id === 5 && "right-0"
                )}
              />
            </div>
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-1 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={`object-cover object-center w-full h-full ${
                id === 4 && "right-0"
              }`}
            />
          )}
        </div>

        <div
          className={
            (cn(titleClassName),
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-7")
          }
        >
          <div className="text-gray-500 text-sm md:text-xs lg:text-lg z-10 uppercase font-bold">
            {description}
          </div>
          <div className="font-bold text-xl text-sky-200/90 lg:text-2xl max-w-96 z-50">
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 4 && (
            <div>
              <ul className="flex flex-wrap justify-center mt-10 gap-6">
                <li>
                  <a
                    href="https://www.linkedin.com/in/mdjoy46/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/img/social_media/linkedin.png"
                      alt="LinkedIn"
                      className="w-12 h-12 transition-transform transform hover:scale-125"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/pH0enix46"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/img/social_media/github.png"
                      alt="GitHub"
                      className="w-12 h-12 transition-transform transform hover:scale-125"
                    />
                  </a>
                </li>

                <li>
                  <a href="mailto:mdjoy.javascript@gmail.com">
                    <img
                      src="/img/social_media/gmail.webp"
                      alt="Email"
                      className="w-12 h-12 transition-transform transform hover:scale-125"
                    />
                  </a>
                </li>

                {/* no need resume */}
                {/* <li>
                  <a
                    href="/img/social_media/RESUME.pdf"
                    download="JOY_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    <img
                      src="/img/social_media/resume.png"
                      alt="Resume"
                      className="w-12 h-12 transition-transform transform hover:scale-125"
                    />
                  </a>
                </li> */}

                <li>
                  <a href="tel:+8801832865677">
                    <img
                      src="/img/social_media/phone.webp"
                      alt="Phone"
                      className="w-12 h-12 transition-transform transform hover:scale-125"
                    />
                  </a>
                </li>
              </ul>
            </div>
          )}

          {id === 3 && (
            <div className="flex justify-start items-center w-full absolute">
              <div className="flex flex-wrap justify-start items-center gap-4 mt-20 p-2">
                {[
                  { src: "/img/skill/tailwind.png", alt: "JavaScript" },
                  { src: "/img/skill/js.webp", alt: "JavaScript" },
                  { src: "/img/skill/ts.png", alt: "TypeScript" },
                  { src: "/img/skill/react.png", alt: "React.js" },
                  { src: "/img/skill/nextjs.jpeg", alt: "Next.js" },
                  { src: "/img/skill/nodejs.png", alt: "Node.js" },
                  { src: "/img/skill/express.webp", alt: "Express.js" },
                  { src: "/img/skill/mongodb.svg", alt: "MongoDB" },
                  { src: "/img/skill/supabase.jpeg", alt: "MongoDB" },
                ].map((tech, index) => (
                  <img
                    key={index}
                    src={tech.src}
                    alt={tech.alt}
                    className="w-[52px] md:w-[50px] lg:w-14 transition-transform duration-300 hover:scale-125 rounded-full"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
// ---------- ⛔️ ⛔️ ⛔️
