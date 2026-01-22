import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Profiles", href: "#profiles", id: "profiles" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Navbar background blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let current: string | null = null;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= scrollPosition) {
          current = link.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : ""
      }`}
    >
      <nav className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="#hero" className="text-xl font-bold text-foreground">
            Abhinai&apos;s Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
  key={link.id}
  href={link.href}
  className={`
    px-4 py-2 rounded-lg text-sm font-medium
    transition-all duration-300
    ${
      activeSection === link.id
        ? `
          bg-black/40 backdrop-blur-md text-white
          border border-white/30
          shadow-[0_0_12px_rgba(255,255,255,0.35)]
        `
        : `
          text-muted-foreground
          hover:bg-black/80 hover:backdrop-blur-md hover:text-white
          hover:border hover:border-white/20
          hover:shadow-[0_0_10px_rgba(255,255,255,0.25)]
        `
    }
  `}
>
  {link.label}
</a>

            ))}

            {/* Download Button */}
            <a
              href="/Abhinairaj_Resume.pdf"
              download
              className="resume-button"
              data-tooltip="Size: 2 MB"
            >
              <div className="resume-wrapper">
                <div className="resume-text">Download</div>
                <div className="resume-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v12" />
                    <path d="m8 11 4 4 4-4" />
                    <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-black/40 hover:text-white transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/Abhinairaj_Resume.pdf"
                download
                className="rounded-lg bg-black/60 border border-border px-4 py-2 text-sm text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
