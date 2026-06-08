import React from "react";

export default function Hero() {
  return (
    // 1. Changed min-h-[90vh] back to min-h-screen
    // 2. Increased pb-20 to pb-24 md:pb-32 to give it a nice footprint
    <section className="relative min-h-screen flex flex-col justify-end pb-24 md:pb-32 w-full">
      
      <div className="text-left w-full">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none mb-6 text-white">
          Hi, I'm Antoine.
        </h1>
        <p className="text-3xl sm:text-4xl md:text-5xl font-normal text-muted-foreground leading-snug">
          3rd-Year Electrical Engineering Student at the University of British Columbia.
        </p>
      </div>

    </section>
  );
}