import React from "react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 pt-4 pb-12 w-full">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Engineering from the Ground Up.</h2>
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
        I’m a third-year Electrical Engineering student at UBC Okanagan specializing in mechatronics and embedded systems. I focus on bridging the gap between simulation and physical reality. Currently, I serve as the Electrical Co-Lead for the OKMR Hydrofoil division, architecting a custom by-wire CAN FD network from the ground up. Whether I'm routing custom component footprints in Altium, writing state-machine firmware for ESP32 microcontrollers, or working hands-on as a maintenance technician, I care about robust architecture, clean data models, and building hardware that works exactly as designed.
      </p>
    </section>
  );
}