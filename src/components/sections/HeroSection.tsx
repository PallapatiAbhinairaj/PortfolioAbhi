import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 relative bg-transparent"
    >
      <div className="w-full max-w-4xl relative z-10">
        <div className="flex flex-col items-start justify-center p-8 md:p-12">

          {/* Identity */}
          <span className="text-sm md:text-base text-white/60 font-medium tracking-widest uppercase mb-4">
            Engineer · Builder · Problem Solver
          </span>

          {/* Main Statement */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-tight">
            Code
            <br />
            With Purpose.
          </h1>

          {/* Description */}
          <p className="mt-6 text-white/70 max-w-lg text-base md:text-lg leading-relaxed">
            I design and build reliable software systems with a focus on performance,
            clarity, and long-term maintainability.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-wide">
          There’s more. Keep scrolling.
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
};
