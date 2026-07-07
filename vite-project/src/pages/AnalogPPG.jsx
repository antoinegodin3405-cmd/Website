import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AnalogPPG() {
  // State to track the currently clicked image (null means modal is closed)
  const [selectedImage, setSelectedImage] = useState(null);

  // Helper function to close the overlay
  const closeModal = () => setSelectedImage(null);

  return (
    <>
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        
        {/* Back Button */}
        <Link 
          to="/Portfolio" 
          className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          ← Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight mb-6">
            Fully Analog PPG Heart Rate Sensor
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            From classroom theory to custom high-density PCB design and active control loop research.
          </p>
        </div>

        {/* Quick Specs / Meta Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 my-12 bg-muted/30 rounded-xl border border-border/60 font-mono text-sm">
          <div>
            <span className="block text-muted-foreground uppercase text-xs mb-1">Origin</span>
            <span className="font-semibold">ENGR352 Lab Project, Personal</span>
          </div>
          <div>
            <span className="block text-muted-foreground uppercase text-xs mb-1">Timeline</span>
            <span className="font-semibold">Sep 2025 - Present (Active R&D)</span>
          </div>
          <div>
            <span className="block text-muted-foreground uppercase text-xs mb-1">Skills</span>
            <span className="font-semibold">Altium Designer, LTspice, Analog Filter Design, PCB Design</span>
          </div>
        </div>

        <hr className="border-border my-16" />

        {/* Main Content Layout */}
        <div className="space-y-24">
          
          {/* Phase 1: Proof of Concept */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 sticky top-8">
              <span className="font-mono text-xs text-primary font-bold uppercase tracking-widest bg-primary/10 px-2 py-1 rounded">
                Phase 01
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-6">
                Academic Baseline & Prototyping
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The baseline architecture originated from the ENGR352 (Microelectronics ii) Labs. The challenge required extracting a clean heartbeat signal from a photodiode sensor by processing raw infrared transmission through a human finger.
              </p>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> 
                  Stage 1: Low-pass Transimpedance Amp
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> 
                  Stage 2: High-pass Filter & Active Gain
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> 
                  Stage 3: Hysteretic Comparator (Schmitt Trigger)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> 
                  Stage 4: Monostable Vibrator
                </li>
              </ul>
            </div>
            
<div className="lg:col-span-7">
              {/* Stacked Image Slots for Phase 1 */}
              <div className="flex flex-col gap-10">
                
                {/* Image 1 */}
                <div>
                  <div className="aspect-video bg-muted rounded-xl border border-border overflow-hidden mb-3">
                    <img 
                      src="/analogPPG/Breadboard.jpg" 
                      alt="Breadboard layout" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground italic text-center">
                    Breadboard in class Protoype with all 4 Stages.
                  </p>
                </div>
                
                {/* Image 2 */}
                <div>
                  <div className="aspect-video bg-muted rounded-xl border border-border overflow-hidden mb-3">
                    <img 
                      src="/analogPPG/Osciloscope-Stage3.jpg" 
                      alt="Oscilloscope output for Stage 3" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground italic text-center">
                    Oscilloscope output for Stage 2 and 3 validating that the comparator output successfully generates a switched signal matching the pulse rate.
                  </p>
                </div>

              </div>
            </div>
          </section>

          <hr className="border-border/40" />

          {/* Phase 2: Hardware Miniaturization */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:order-last sticky top-8">
              <span className="font-mono text-xs text-primary font-bold uppercase tracking-widest bg-primary/10 px-2 py-1 rounded">
                Phase 02
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-6">
                Custom PCB Miniaturization
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To make the project permanent, I transitioned from the breadboard to designing a custom, highly compact circuit board. With footprint size as a top priority, I drew inspiration from old CRT TV PCB layouts and decided to mount the resistors vertically. I designed a custom 2D footprint in Altium and modeled a 3D vertical DIN 0207 resistor in Onshape to import into Altium. This virtual prototyping allowed me to verify all mechanical clearances digitally before committing to the final design. Once the physical board arrived and was soldered, I went to the lab to fully validate its functionality.

              </p>
            </div>
            
            <div className="lg:col-span-7">
              {/* Stacked Image Slots for Phase 2 */}
              <div className="flex flex-col gap-10">
                <div>
                  <div className="aspect-video bg-muted rounded-xl border border-border overflow-hidden mb-3">
                    <img 
                      src="/analogPPG/PCBdigital.jpg" 
                      alt="Breadboard layout" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground italic text-center">
                    3D render of the PCB ensuring no conflicts with the custom vertical resistor footprints.
                  </p>
                </div>
                <div>
                  <div className="aspect-video bg-muted rounded-xl border border-border overflow-hidden mb-3">
                    <img 
                      src="/analogPPG/PCBtesting.jpg" 
                      alt="Breadboard layout" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground italic text-center">
                    Functional validation of the PCB in the Lab
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-border/40" />

          {/* Phase 3: Active R&D */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 sticky top-8">
              {/* The Fixed, Subtle Badge */}
              <span className="font-mono text-xs text-primary font-bold uppercase tracking-widest bg-primary/10 px-2 py-1 rounded">
                Phase 03 (Active Development)
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-6">
                Analog Gain Control Loop
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Human skin tone, capillary depth, and motion artifacts introduce huge variations in sensor signal amplitude. To solve this, I am designing an independent <strong>Analog Gain Control Loop</strong> to automatically adapt amplification levels dynamically.
              </p>
              
              {/* Subtle Status Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-muted rounded-full border border-border text-sm">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-muted-foreground">Current Status: Procurement & BOM Sourcing</span>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-6">
              {/* Clickable Image Slots for Phase 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Image 1 */}
                <div 
                  className="aspect-video bg-muted rounded-xl border border-border overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage('/analogPPG/SimWithoutCS.png')}
                >
                  <img 
                    src="/analogPPG/SimWithoutCS.png" 
                    alt="Dynamic Control Loop Simulation Plots" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Image 2 */}
                <div 
                  className="aspect-video bg-muted rounded-xl border border-border overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage('/analogPPG/SimWithCS.png')}
                >
                  <img 
                    src="/analogPPG/SimWithCS.png" 
                    alt="Hardware Procurement List and BOM" 
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
              <div className="space-y-4 text-sm text-muted-foreground mt-6 border-l-2 border-primary/50 pl-4">
                <p>
                  <strong>Left [Standard Architecture]:</strong> Introducing a severe 1.5µA noise disturbance (relative to a nominal 0.8µA–4.0µA signal range) drives the static feedback loop into hard saturation at the positive voltage rail, immediately clipping the signal.
                </p>
                <p>
                  <strong>Right [Active AGC Loop]:</strong> The dynamic control loop successfully compensates for the disturbance. While the output exhibits a minor baseline shift (centering around 4.2V), it prevents saturation. The remaining ±0.15V deviation (bounded between 4.05V and 4.35V) is well within the acceptable tolerance for downstream comparator stages. Tuning the loop any more aggressively to eliminate this minor error risks attenuating the physiological heartbeat itself.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
      {/* --- LIGHTBOX MODAL --- */}
      {/* This only renders if selectedImage is not null */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center">
            {/* Close Button */}
            <button 
              className="absolute -top-10 right-0 text-white/70 hover:text-white font-mono text-sm tracking-widest transition-colors"
              onClick={closeModal}
            >
              [ CLOSE ]
            </button>
            
            {/* Enlarged Image */}
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      )}
      {/* --- END LIGHTBOX MODAL --- */}
      </> 
  );
}