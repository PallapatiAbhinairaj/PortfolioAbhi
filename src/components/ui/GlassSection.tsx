import { ReactNode } from "react";

interface GlassSectionProps {
  children: ReactNode;
  className?: string;
}

export const GlassSection = ({ children, className = "" }: GlassSectionProps) => {
  return (
    <div
      className={`
        backdrop-blur-xl 
        bg-black/35 
        border border-white/10 
        rounded-3xl 
        shadow-2xl 
        ${className}
      `}
    >
      {children}
    </div>
  );
};
