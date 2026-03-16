import React, { useState, useEffect } from "react";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const RESUME_URL = "https://drive.google.com/file/d/1ulMm7cU8YdGM-SW73Z-aes1EyaiLfGQX/view?usp=sharing";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-bold text-lg tracking-tight">
          A<span className="text-primary">.</span>G
        </a>

        <div className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>

        <Button asChild size="sm" variant="outline" className="gap-2 border-primary/20 hover:bg-primary/5">
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            <FileDown className="w-4 h-4" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </Button>
      </div>
    </nav>
  );
}