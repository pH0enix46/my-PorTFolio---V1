/* eslint-disable @typescript-eslint/no-explicit-any */
// // //

"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

// Experience function ---------- ✅ ✅ ✅
export default function Experience() {
  return (
    <section className="py-20 mt-10 md:mt-20 w-full relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 transition-opacity duration-500 ease-in-out"
        src="/video/bg.mp4"
        autoPlay
        loop
        muted
      />

      <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center relative z-10 opacity-100">
        My current <span className="text-purple">Position!</span>
      </h1>

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-2">
        <Card
          title="Fresher"
          icon={<AceternityIcon btnCheck="Check here!" />}
          description="I'm new to professional work but have been dedicating a lot of time to learn and build MERN stack projects. I'm truly passionate about coding and excited to continue growing and applying my skills in a real-world scenarios"
        >
          <CanvasRevealEffect
            animationSpeed={3.0}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border-2 border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full max-w-lg mx-auto p-4 relative h-[26rem] md:h-[35rem] rounded-3xl shadow-lg shadow-gray-500"
    >
      <Icon className="absolute h-16 w-16 -top-6 dark:text-white text-black opacity-30 -left-6" />
      <Icon className="absolute h-16 w-16 -bottom-6 -left-6 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-16 w-16 -top-6 dark:text-white text-black opacity-30 -right-6" />
      <Icon className="absolute h-16 w-16 -bottom-6 -right-6 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {icon}
        </div>
        <h2 className="dark:text-white text-4xl sm:text-5xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold text-center group-hover/canvas-card:text-pink-400 group-hover/canvas-card:-translate-y-2 transition duration-200 uppercase">
          {title}
        </h2>
        <h2 className="dark:text-white text-2xl sm:text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold text-center group-hover/canvas-card:text-amber-300 group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ btnCheck }: { btnCheck: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-2xl sm:text-3xl text-gray-400 backdrop-blur-3xl font-bold">
          {btnCheck}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
// ---------- ⛔️ ⛔️ ⛔️
