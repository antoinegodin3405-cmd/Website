import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
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
  /*{
    icon: Github,
    label: "GitHub",
    href: "https://github.com/antoinegodin3405-cmd",
  }*/
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 w-full">
      {/* 1. Restored the bounding box to fix the left margin alignment */}
      <div className="max-w-6xl mx-auto">
        
        {/* 2. Flex container to split text (left) and buttons (right) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Left Side: Text Block */}
          <div className="max-w-xl text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get in Touch.</h2>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              {/* I'm currently based in Kelowna and always open to discussing new hardware projects, embedded systems architecture, or upcoming engineering roles. Check out my GitHub for custom PCB layouts and firmware repositories, or reach out directly via email. */}
              I'm currently based in Kelowna and always open to discussing new hardware projects, embedded systems architecture, or upcoming engineering roles. Reach out directly via email to connect
            </p>
          </div>

          {/* Right Side: Uniform Button Column */}
          <div className="flex flex-col gap-4 w-full md:w-72 shrink-0 mt-2 md:mt-0">
            {links.map((link) => (
              <Button
                key={link.label}
                asChild
                variant="outline"
                className="w-full justify-start gap-3 border-primary/20 hover:bg-primary/5 py-6"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-5 h-5 text-primary" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}