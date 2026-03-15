import React from "react";
import { Mail, Linkedin, MessageCircle, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  {
    icon: Mail,
    label: "Antoinegodin3405@gmail.com",
    href: "mailto:Antoinegodin3405@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/antoine-godin-b648a72b6/",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/12502156033",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/antoinegodin3405-cmd", // Don't forget to update this!
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl border border-border bg-card p-10 sm:p-14 text-center overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />

          <div className="relative z-10">
            <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">Connect & Explore</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Let's build something.
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10">
              Interested in robotics, automation, and embedded systems projects. Feel free to reach out directly, or check out my repositories to see my code.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              {links.map((link) => (
                <Button
                  key={link.label}
                  asChild
                  variant="outline"
                  className="gap-2 border-primary/20 hover:bg-primary/5 w-full sm:w-auto"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="w-4 h-4 text-primary" />
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}