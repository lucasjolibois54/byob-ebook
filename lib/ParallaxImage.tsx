"use client";
import { useEffect, useState, FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  height: string;
  width: string;
  alt: string;
  styling?: string;
}

const ParallaxImage: FC<ParallaxImageProps> = ({
  src,
  height,
  width,
  alt,
  styling,
}) => {
  const [offsetY, setOffsetY] = useState<number>(0);
  const [dynamicScale, setDynamicScale] = useState<number>(1);

  const handleScroll = () => {
    const newOffsetY = window.scrollY * 0.04;
    setOffsetY(newOffsetY);
    const scale = Math.max(1, 1 + (window.scrollY / window.innerHeight) * 0.08);
    setDynamicScale(scale);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleScroll(); // Initialize values
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      className={`relative overflow-hidden ${styling}`}
      style={{ height, width }}
    >
      <motion.div
        className="absolute w-full h-full"
        style={{ y: offsetY, scale: dynamicScale }} // Dynamic scaling
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>
    </div>
  );
};

export default ParallaxImage;
