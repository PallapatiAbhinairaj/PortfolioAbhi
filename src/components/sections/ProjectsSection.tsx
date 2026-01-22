import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";

const projects = [
  {
    title: "AI Expense Splitter (Splitwise Clone)",
    description:
      "A real-time expense splitting application supporting group and individual expenses with intelligent debt minimization and AI-powered spending insights.",
    tags: [
      "Next.js",
      "Convex",
      "Clerk",
      "Tailwind CSS",
      "shadcn/ui",
      "Gemini AI",
      "Inngest",
    ],
    image: "/ai-splitwise.png",
    liveUrl: "https://github.com/PallapatiAbhinairaj",
    githubUrl: "https://github.com/PallapatiAbhinairaj",
    featured: true,
  },
  {
    title: "Job Application Tracker – Full Stack",
    description:
      "A secure full-stack job tracking platform with JWT authentication, protected routes, and real-time application status management.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Bootstrap"],
    image: "/job-tracker.png",
    liveUrl: "https://github.com/PallapatiAbhinairaj",
    githubUrl: "https://github.com/PallapatiAbhinairaj",
    featured: true,
  },
  {
    title: "SecurePass – Encrypted Password Manager",
    description:
      "A C++ based encrypted password manager using SHA-256 and XOR encryption with automated backups and password generation.",
    tags: ["C++", "SHA-256", "Encryption", "OOP"],
    image: "/securepass.png",
    liveUrl: "https://github.com/PallapatiAbhinairaj",
    githubUrl: "https://github.com/PallapatiAbhinairaj",
    featured: false,
  },
  {
    title: "License Plate Detection System",
    description:
      "A real-time license plate detection and recognition system built using YOLOv9x and EasyOCR, achieving 92% accuracy on large-scale datasets.",
    tags: ["Python", "YOLOv9x", "EasyOCR", "Machine Learning"],
    image: "/license-plate.png",
    liveUrl: "https://github.com/PallapatiAbhinairaj",
    githubUrl: "https://github.com/PallapatiAbhinairaj",
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 pointer-events-auto">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated showcase of my real-world full-stack, backend, and systems projects.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <TiltCard key={index}>
              <Card className="group overflow-hidden bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full">

                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  </div>
                </div>

              </Card>
            </TiltCard>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <TiltCard key={index}>
              <Card className="group overflow-hidden bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all h-full">

                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  </div>
                </div>

              </Card>
            </TiltCard>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/PallapatiAbhinairaj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
