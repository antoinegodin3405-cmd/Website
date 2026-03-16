import React from "react";
import { FileDown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const RESUME_URL = "https://drive.google.com/file/d/1ulMm7cU8YdGM-SW73Z-aes1EyaiLfGQX/view?usp=sharing";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 text-center max-w-3xl w-full mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Antoine{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            —
          </span>{" "}
          <br className="sm:hidden" />
          3rd-Year Electrical Engineering Student
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          Specializing in control systems, mechatronics, and embedded hardware.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">
          <Button asChild size="lg" className="text-base px-8 gap-2 w-full sm:w-auto">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <FileDown className="w-5 h-5" />
              View Resume
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 gap-2 border-primary/20 hover:bg-primary/5 w-full sm:w-auto">
            <a href="#projects">
              See My Work
              <ChevronDown className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground font-mono px-4 sm:px-0">
          <span>MATLAB</span>
          <span className="hidden sm:inline text-primary/30">•</span>
          <span>C/C++</span>
          <span className="hidden sm:inline text-primary/30">•</span>
          <span>Python</span>
          <span className="hidden sm:inline text-primary/30">•</span>
          <span>Altium</span>
          <span className="hidden sm:inline text-primary/30">•</span>
          <span>SolidWorks</span>
        </div>
      </div>
    </section>
  );
}