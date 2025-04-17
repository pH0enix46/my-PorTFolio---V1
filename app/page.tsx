// // //
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Motivation from "@/components/Motivation";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

// Main Home function ---------- ✅ ✅ ✅
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-x-hidden overflow-y-auto">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Motivation />
      </div>

      <div className="relative w-screen">
        <div className="absolute inset-0 bg-black opacity-30 z-10" />

        <video
          className="absolute top-0 left-0 w-screen h-full object-cover opacity-50 transition-opacity duration-500 ease-in-out z-0"
          src="/video/bg.mp4"
          autoPlay
          loop
          muted
        />

        <div className="relative z-10">
          <div className="p-4">
            <Experience />
            <AboutMe />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
// ---------- ⛔️ ⛔️ ⛔️
