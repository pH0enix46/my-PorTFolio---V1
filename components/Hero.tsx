// // //

import HeroDescription from "./content/HeroDescription";
import { Spotlight } from "./ui/Spotlight";

// Hero function ---------- ✅ ✅ ✅
export default function Hero() {
  return (
    <div className="pb-20 pt-36 h-screen">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white absolute dark:bg-grid-white/[0.08] bg-grid-black/[0.3] flex items-center justify-center top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[100vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <HeroDescription />
        </div>
      </div>
    </div>
  );
}
// ---------- ⛔️ ⛔️ ⛔️
