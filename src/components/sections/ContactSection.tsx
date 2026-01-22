import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// LeetCode icon is not in lucide, so we use a simple custom SVG component
const LeetCodeIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    {...props}
  >
    <path d="M16.102 17.959l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a4 4 0 01-5.657-5.657l4.95-4.95a4 4 0 015.657 5.657l-.707.707a1 1 0 101.414 1.414l.707-.707a6 6 0 10-8.485-8.485l-4.95 4.95a6 6 0 108.485 8.485z" />
  </svg>
);

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/PallapatiAbhinairaj",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/pallapati-abhinairaj-977844304/",
    label: "LinkedIn",
  },
  {
    icon: LeetCodeIcon,
    href: "https://leetcode.com/u/abhinairaj/",
    label: "LeetCode",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 pointer-events-auto">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let’s Connect Today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-8">
              I enjoy connecting with people who are passionate about technology
              and problem-solving. If you’d like to discuss opportunities,
              projects, or just have a tech conversation, feel free to reach out.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-secondary">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground">pabhinairaj@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-secondary">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Bengaluru, Karnataka.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-secondary">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground">+91 **********</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 md:p-8 bg-card border-border">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    placeholder="Your name"
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-secondary border-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  placeholder="What's this about?"
                  className="bg-secondary border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-secondary border-border resize-none"
                />
              </div>

              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
