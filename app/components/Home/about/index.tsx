"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    const handleScrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", ""); // Remove the '#' from the hash
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    handleScrollToSection();
  }, []);

  return (
    <>
      <div>
        <div id="about" className="max-w-7xl mx-auto pt-20 mt-20 px-6 md:px-5 text-white">
          <div className="flex gap-10">
            <div className="font-medium w-full md:w-1/2 space-y-14">
              <div className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl xl:leading-[75px]">
                Empowering You to Master the Art of Haircutting
              </div>
              <div className="space-y-4 text-xl">
                <h2>Who Are We?</h2>
                <p className="opacity-40">
                  Welcome to the home of self-made barbers! We believe anyone
                  can learn the skills to confidently cut hair, whether for
                  personal grooming or as a career. Our e-book is designed to
                  guide you every step of the way, from mastering fades and
                  layers to advanced cutting techniques that make you stand out.
                </p>
              </div>
              <div className="space-y-5 text-xl">
                <h2>What Makes Us Different?</h2>
                <p className="opacity-40">
                  Unlike other guides, our e-book combines professional barbering
                  techniques with easy-to-follow instructions. You&apos;ll learn
                  not only how to cut your own hair but also how to impress
                  clients with precision fades, clean layers, and creative
                  styling. Whether you&apos;re just starting or want to level up
                  your skills, we&apos;ve got you covered.
                </p>
              </div>
              <Link href="/about">
              <button className="mt-8 px-6 py-3 bg-white text-black font-medium rounded-full shadow-md hover:bg-neutral-200 transition">
                    Learn More About Us!
                  </button>
              </Link>
            </div>
            <div className="w-1/2 hidden md:block relative">
              {/* Ensure the container has a full height */}
              <div className="h-full rounded-md">
                <Image
                  src="/images/2.webp"
                  alt="About Barbering E-Book"
                  fill 
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
