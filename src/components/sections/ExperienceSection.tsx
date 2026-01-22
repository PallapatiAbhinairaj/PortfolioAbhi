import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const experiences = [
  {
    title: "Program analyst trainee",
    company: "Cognizant technology and solutions",
    period: "Nov 2024 - June 2025",
    description:
      "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving technical decisions.",
  },
  {
    title: "Software Engineer",
    company: "JPMorgan Chase & Co",
    period: "Feb 2024 - April 2024",
    description:
      "Built and maintained multiple client-facing applications. Implemented CI/CD pipelines and improved deployment efficiency by 40%.",
  },
  {
    title: "Amrita Vishwa vidyapeetham , Chennai",
    company: "Computer Science and Engineering",
    period: "2020 - 2024",
    description:
      "Developed responsive web applications for various clients. Specialized in React and modern CSS frameworks.",
  },
  {
    title: "Sri Gayatri Junior College",
    company: "Maths Physics and Chemistry (MPC)",
    period: "2018 - 2020",
    description:
      "Started career building websites and learning full-stack development. Contributed to multiple successful project launches.",
  },
];

export const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll progress for the timeline
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 md:py-32 pointer-events-auto relative"
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-white/60 text-lg">
            My professional journey through the tech industry
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative">

          {/* Base timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          {/* Glowing progress line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 w-px bg-primary origin-top md:-translate-x-1/2 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            style={{ scaleY: lineScale }}
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0.4 }}
                  whileInView={{ scale: 1.4, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-6 z-10"
                >
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    initial={{ scale: 1, opacity: 0.4 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </motion.div>

                {/* Card content */}
                <div
                  className={`flex-1 pl-12 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:pl-16"
                  }`}
                >
                  <TiltCard>
                    <Card className="p-6 bg-black/60 backdrop-blur-xl border border-white/10 hover:border-primary/100 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <span className="text-sm text-white/60">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary mb-3">{exp.company}</p>
                      <p className="text-white/60">{exp.description}</p>
                    </Card>
                  </TiltCard>
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
