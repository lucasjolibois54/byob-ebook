"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import IntroAnimation from "../new-hero/NewHero";

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Adjust the transform to move faster
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Placeholder Hero Section */}
      <IntroAnimation />

      {/* Sub Hero Section that overlaps */}
      <motion.div style={{ y }} className="absolute top-[95vh] left-0 right-0 min-h-screen z-20">
        <div className="w-full max-w-7xl mx-auto p-12">
          <div className="bg-neutral-100 rounded-[2rem] p-12 md:p-16 relative">
            <div className="max-w-3xl space-y-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider">
                Transform Your Skills with Our Barbering E-Book
              </h2>
              <p className="text-neutral-600 text-lg md:text-xl">
                Learn how to cut hair like a professional with our step-by-step e-book. Master self-cuts, fades, layers,
                and advanced barbering techniques to perfect your craft—whether for personal use or to launch your
                barbering career.
              </p>
              <div className="space-y-6">
                <ServiceItem
                  icon={<EquipmentIcon />}
                  title="Master Self-Cuts and Advanced Fades"
                />
                <ServiceItem
                  icon={<SupportIcon />}
                  title="Learn Professional Barbering Techniques"
                />
                <ServiceItem
                  icon={<MarketingIcon />}
                  title="Build Confidence and Start a Barbering Career"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Spacer to allow scrolling */}
      <div className="h-screen"></div>
    </div>
  );
}

function ServiceItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-6 p-6 rounded-2xl bg-white shadow-sm">
      <div className="text-neutral-800">{icon}</div>
      <h3 className="font-light tracking-wider text-lg">{title}</h3>
    </div>
  );
}

function EquipmentIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="currentColor" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="currentColor" />
    </svg>
  );
}

function MarketingIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z" fill="currentColor" />
    </svg>
  );
}
