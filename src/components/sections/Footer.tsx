import { Heart } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Coding Profiles", href: "#profiles" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50 pointer-events-auto backdrop-blur-sm">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="text-xl font-bold">
            Abhinai&apos;s Portfolio
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          

          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Happy New Year -  2026 </span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </div>

        </div>
      </div>
    </footer>
  );
};
