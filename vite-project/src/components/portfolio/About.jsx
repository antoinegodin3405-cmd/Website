import React from "react";
import { Cpu, Zap, Wrench, Globe } from "lucide-react";

const skills = [
  { icon: Cpu, label: "Embedded Systems", detail: "ESP32, Arduino, SPI/I2C/CAN" },
  { icon: Zap, label: "Control Systems", detail: "MATLAB, Simulink, CAN Networks" },
  { icon: Wrench, label: "Rapid Prototyping", detail: "3D Printing, Soldering, PCB" },
  { icon: Globe, label: "Trilingual", detail: "English, French, German" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 w-full">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">About Me</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
          Engineering from the ground up.
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-14">
          I take full ownership of complex electromechanical problems — from schematic capture and
          PCB layout to firmware development and system integration. Currently studying Electrical
          Engineering at UBC, I'm driven by a deep curiosity for high-tech robotics and automation.
          Whether it's architecting a CAN bus network for an autonomous hydrofoil or building a
          custom LED matrix from scratch, I work with precision and urgency to ship real systems
          that perform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors w-full"
            >
              <skill.icon className="w-5 h-5 text-primary mb-3" />
              <p className="font-semibold text-sm">{skill.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{skill.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}