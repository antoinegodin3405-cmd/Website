import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "OKMR Hydrofoil Division – Electrical Co-Lead",
    date: "Sep 2024 – Present",
    description:
      "As the Electrical Co-Lead, I collaborated with the team to architect a custom by-wire CAN FD network from a blank slate, establishing the core technical strategy for the hydrofoil. To validate this design prior to physical hardware implementation, we are simulating the network architecture in MATLAB. Currently, I manage a diverse technical team of junior engineering students. I oversee the electrical architecture for critical subsystems, including a By-Wire Cockpit, Human Interface, and Propulsion System. We are currently executing component procurement and preparing to transition into physical assembly.",
    tags: ["CAN FD", "MATLAB", "Control Systems", "Team Lead"],
  },
  {
    title: "Custom ESP32 DMX LED Matrix & Firmware",
    date: "Nov 2025 – Present",
    description:
      "Designed and assembled a custom hardware interface bridging DMX512 communication with a 64x64 RGB LED matrix using an ESP32 and a MAX485 transceiver. Engineered a multi-mode state machine operating as a standard fixture, plus custom 'Effect Channels' including a WiFi/NTP-synchronized world clock and a physics-based Pong game. Currently integrating a live 'Commuter Mode' parsing BC Transit GTFS-realtime feeds.",
    videos: [
      "https://www.youtube.com/watch?v=qTVEJrXMsHM",
      "https://www.youtube.com/watch?v=1nInwJ51YYM",
      "https://www.youtube.com/watch?v=eD70ZSfg-GM",
    ],
    tags: ["ESP32", "DMX512", "HUB75", "C/C++"],
  },
  {
    title: "Thermal Rocket Ecological Enhancement System (TREES)",
    date: "Jan 2024 – Mar 2024",
    description:
      "For an APSC 171 Design Project, developed a modular, propulsion-based solution for reforesting hard-to-reach terrain. Spearheaded technical development of the final production-ready model, implementing strict Design for Manufacturing (DFM) principles (draft angles, ejector pin surfaces) for high-volume injection molding. Ranked Top 20 out of 75+ teams and won First Place in Videography.",
    videos: ["https://www.youtube.com/watch?v=RsNmkVVPb_0"],
    tags: ["SolidWorks", "DFM", "Injection Molding", "APSC 171"],
  },
  {
    title: "Ski Resort Design (1st Place CAD/CAM Project)",
    date: "Jan 2024 – Mar 2024",
    description:
      "Executed detailed 3D modeling of a commercial chair carrier assembly using SolidWorks. Working from proprietary technical schematics under NDA, utilized advanced 3D sketching to reverse-engineer frame geometry and maintain 100% dimensional accuracy to industrial standards. Placed 1st overall out of over 75 competing teams.",
    videos: ["https://www.youtube.com/watch?v=-V5GGG-GRuw"],
    tags: ["SolidWorks", "CAD", "Reverse Engineering", "3D Modeling"],
  },
  {
    title: "Mechatronic 3D Printer Overhaul",
    date: "Sep 2022 – Sep 2023",
    description:
      "Executed comprehensive mechatronic upgrades on an Ender 3 system. Integrated a new motherboard, BLTouch probe for automated bed leveling, direct-drive extruder, and a dual Z-axis system. Drastically improved dimensional accuracy and consistency for rapid prototyping complex engineering components.",
    // Added the shorts video URL here!
    videos: ["https://youtube.com/shorts/aCPHjXrxw0s?feature=share"],
    tags: ["3D Printing", "Mechatronics", "Firmware", "Hardware"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">Projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          Engineering Experience & Projects
        </h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}