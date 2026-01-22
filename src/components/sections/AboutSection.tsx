import { MapPin, Calendar } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 pointer-events-auto">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">

        {/* TILT WRAPPER */}
        <TiltCard>
          {/* GLASS CONTAINER */}
          <div
  className="
    backdrop-blur-xl bg-black/5
    border border-white/15
    rounded-3xl
    p-8 md:p-12
    transition-all duration-300

    shadow-[0_0_30px_rgba(255,255,255,0.08)]
    hover:border-white/100
    hover:shadow-[0_0_45px_rgba(255,255,255,0.18)]
  "
>

            <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">

              {/* Profile Image */}
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border">
                  <img
                    src="/photo.jpeg"
                    alt="Abhinairaj"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full -z-10" />
              </div>

              {/* About Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  About Me
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  I’m a passionate software engineer who enjoys building clean, scalable, and user-focused web applications. I focus on writing maintainable code and creating interfaces that feel intuitive and reliable.

                  My experience spans full-stack development, where I’ve worked with modern frontend frameworks, backend systems, and databases to deliver end-to-end solutions. I enjoy solving real-world problems through thoughtful design and efficient logic.

                  Beyond coding, I actively improve my skills by learning new technologies, exploring system design concepts, and working on personal projects that push my limits.

                </p>

                <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Bengaluru , Karnataka</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>7 months experience</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </TiltCard>

      </div>
    </section>
  );
};
