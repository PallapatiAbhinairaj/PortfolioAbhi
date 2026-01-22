import {
  Code,
  Database,
  Globe,
  Terminal,
  Layers,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Programming Languages",
    icon: Layers,
    skills: ["C++", "Python", "Java", "C#"],
  },
  {
    title: "Cloud Technologies",
    icon: Globe,
    skills: ["AWS"],
  },
  {
    title: "Other Tools",
    icon: Terminal,
    skills: ["Git", "Excel", "Visual Studio Code"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 pointer-events-auto">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A focused, practical stack used to build reliable and scalable systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <TiltCard key={index}>
              <Card
                className="
                  group
                  p-6
                  bg-black/70
                  border border-white/10
                  rounded-2xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                  hover:border-primary/100
                  transition-all
                "
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/5">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* TITLE — SAME BEHAVIOR AS PROJECTS */}
                  <h3
                    className="
                      text-lg font-semibold
                      text-white/60
                      transition-colors duration-300
                      group-hover:text-white
                    "
                  >
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="
                        px-3 py-1 text-sm
                        bg-white/5
                        text-white/70
                        rounded-full
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
