"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroAnimation() {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Initial Text */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <h1 className="text-[80px] text-neutral-300 font-serif">Selvklip</h1>
      </motion.div>

      {/* Perspective Image Container */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{
          opacity: 0,
          scale: 0.8,
          rotateX: "45deg",
          rotateY: "-15deg",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotateX: "0deg",
          rotateY: "0deg",
        }}
        transition={{
          delay: 2,
          duration: 1.5,
          ease: "easeOut",
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <motion.div
          className="relative w-screen h-screen"
          initial={{
            clipPath: "inset(25% 25% 25% 25% round 2rem)",
          }}
          animate={{
            clipPath: "inset(0% 0% 0% 0% round 0)",
          }}
          transition={{
            delay: 3.5,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          {/* Image with Black Overlay */}
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FkuReMpHXPuSSWnEFaNznzSW7KE7oK.png"
              alt="Burning wood with flames"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Overlay Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-start pl-20 z-10"
      >
        <h1 className="text-[75px] text-neutral-300 font-medium">Become Your Own Barber</h1>
      </motion.div>
    </div>
  );
}
