import React from "react";
import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Projects from "../components/portfolio/Projects";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";

// 1. We import the image into the main layout file now
// (You may need to adjust the ../ depending on where this file is saved)
import profileImage from "../assets/Antoine_Godin.JPG"; 

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* 2. THE NEW MASTER WRAPPER FOR STICKY LAYOUT */}
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 relative">
        
        {/* LEFT COLUMN: The scrolling text */}
        {/* This max-w-4xl fixes the broken margins on your About section! */}
        <div className="flex-1 w-full max-w-4xl">
          <Hero />
          <About />
        </div>

        {/* RIGHT COLUMN: The Sticky Image */}
        <div className="hidden md:block sticky top-32 flex-shrink-0 pt-24">
          <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-neutral-800 shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)]">
            <img 
              src={profileImage}
              alt="Antoine Godin Portrait" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
      
      {/* These sections stay outside so they push the sticky image away when reached */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}