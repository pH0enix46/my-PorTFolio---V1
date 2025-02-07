// // //
/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GridGlobe } from "./GridGlobe";

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
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto",
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
  spareIm?: string;
}) => {
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
      <div className={`${id === 6} && "flex justify-center h-full"`}>
        <div className="w-full h-full absolute right-0">
          {img && (
            <img
              src={img}
              alt={img}
              className={
                (cn(imgClassName),
                `object-cover object-center ${id === 1 && "w-full h-full"} ${
                  id === 5 && "right-0"
                }`)
              }
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={`object-cover object-center w-full h-full ${
                id === 5 && "right-0"
              }`}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={
            (cn(titleClassName),
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10")
          }
        >
          <div className="font-extralight text-gray-400 text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-bold text-xl lg:text-2xl max-w-96 z-50">
            {title}
          </div>
        </div>

        {id === 2 && <GridGlobe />}

        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col"></div>
          </div>
        )}
      </div>
    </div>
  );
};
// ---------- ⛔️ ⛔️ ⛔️
