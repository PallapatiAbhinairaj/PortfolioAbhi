import { TiltCard } from "@/components/ui/tilt-card";

export const BlogSection = () => {
  return (
    <section id="profiles" className="py-24 md:py-32 pointer-events-auto">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">

        {/* Coding Profiles Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Coding Profiles
          </h2>
          <p className="text-white/60 text-lg">
            Where I build, solve, and share code
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* GitHub Card */}
          <TiltCard>
            <a
              href="https://github.com/PallapatiAbhinairaj"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div
                className="
                  rounded-2xl overflow-hidden
                  bg-black/60 backdrop-blur-xl
                  border border-white/10
                  transition-all duration-300
                  hover:border-white/40
                  hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
                "
              >
                <img
                  src="/github-preview.png"
                  alt="GitHub Profile"
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">
                    PallapatiAbhinairaj
                  </h3>
                  <p className="text-sm text-white/60">GitHub</p>
                </div>
              </div>
            </a>
          </TiltCard>

          {/* LeetCode Card */}
          <TiltCard>
            <a
              href="https://leetcode.com/abhinairaj"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div
                className="
                  rounded-2xl overflow-hidden
                  bg-black/60 backdrop-blur-xl
                  border border-white/10
                  transition-all duration-300
                  hover:border-white/40
                  hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
                "
              >
                <img
                  src="/leetcode-preview.png"
                  alt="LeetCode Profile"
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">
                    abhinairaj
                  </h3>
                  <p className="text-sm text-white/60">
                    LeetCode · 250+ Problems
                  </p>
                </div>
              </div>
            </a>
          </TiltCard>

          {/* LinkedIn Card */}
          <TiltCard>
            <a
              href="https://www.linkedin.com/in/pallapati-abhinairaj-977844304/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div
                className="
                  rounded-2xl overflow-hidden
                  bg-black/60 backdrop-blur-xl
                  border border-white/10
                  transition-all duration-300
                  hover:border-white/40
                  hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
                "
              >
                <img
                  src="/linkedin-preview.png"
                  alt="LinkedIn Profile"
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">
                    Abhinairaj Pallapati
                  </h3>
                  <p className="text-sm text-white/60">LinkedIn</p>
                </div>
              </div>
            </a>
          </TiltCard>

        </div>
      </div>
    </section>
  );
};
