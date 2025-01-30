"use client";

import { motion } from "framer-motion";

export default function IntroAnimation() {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">

      {/* Perspective Video Container */}
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
          delay: 0,
          duration: 1,
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
            delay: 1.5,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          {/* Video with Black Overlay */}
          <div className="relative w-full h-full">
            <video
              src="https://res.cloudinary.com/dh4iesekp/video/upload/v1738253732/TIKTOKMAIN_z68khp.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Content Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
      >
        {/* Update Banner */}
        <div className="mb-4 px-4 py-2 bg-neutral-800 text-white text-sm font-medium rounded-full inline-flex items-center gap-2">
          <span className="uppercase text-xs bg-neutral-700 px-2 py-1 rounded-full">New</span>
          <span>Master the Art of Haircutting</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl font-bold text-white leading-relaxed max-w-4xl">
          Learn to Cut Like a Pro with Our Step-by-Step Barbering E-Book
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-2xl">
          Discover the secrets to perfect fades, layers, and advanced cutting techniques. Whether you want to master self-cuts or start your own barbering business, our e-book has everything you need to succeed.
        </p>

        {/* Call-to-Action Button */}
        <button className="mt-8 px-6 py-3 bg-white text-black font-medium rounded-full shadow-md hover:bg-neutral-200 transition">
          Get the E-Book Now!
        </button>
      </motion.div>
    </div>
  );
}
