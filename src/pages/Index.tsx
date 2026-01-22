import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { SplineScene } from "@/components/ui/splite";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";

const Index = () => {
  // Subtle parallax so the robot "follows" the cursor/spotlight even when sections are on top.
  const normX = useMotionValue(0);
  const normY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      normX.set(x);
      normY.set(y);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [normX, normY]);

  const robotX = useSpring(useTransform(normX, (v) => v * 36), {
    stiffness: 120,
    damping: 20,
  });
  const robotY = useSpring(useTransform(normY, (v) => v * 24), {
    stiffness: 120,
    damping: 20,
  });

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Cursor spotlight - follows cursor across entire page */}
      <CursorSpotlight size={300} className="absolute z-[5]" />
      
      {/* Fixed fullscreen robot background */}
      <motion.div
        className="fixed inset-0 z-10 pointer-events-auto"
        style={{ x: robotX, y: robotY }}
      >
        {/* Enhanced glow behind robot */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-primary/20 blur-[180px]" />
        </div>
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-20 pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

