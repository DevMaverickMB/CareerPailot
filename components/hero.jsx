"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    // Add 'loaded' class after a short delay to trigger initial glide-in
    setTimeout(() => {
      if (imageElement) {
        imageElement.classList.add("loaded");
      }
    }, 100); // Delay to ensure initial render

    const handleScroll = () => {
      if (!imageElement) return;

      const rect = imageElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.6;

      if (rect.top < scrollThreshold && rect.bottom > windowHeight * 0.2) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-8 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
          Your AI Partner <br />for Career Excellence
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Supercharge your career with AI-driven guidance, <br />interview prep, and tools to help you excel in your professional journey.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
            <Link href="/dashboard">
              <Button size="lg" className="px-8 bg-[#51faaa] text-black hover:scale-105 hover:bg-[#51faaa] hover:text-black hover:shadow-downward-green transition-all duration-300">
                Get Started
              </Button>
            </Link>
            <Link href="https://www.youtube.com/" target="_blank">
              <Button size="lg" variant="outline" className="px-8 border-[#51faaa] text-[#51faaa] hover:scale-105 hover:bg-black hover:text-[#51faaa] hover:shadow-downward-green transition-all duration-300">
                Watch Demo
              </Button>
            </Link>
          </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner1.png"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
