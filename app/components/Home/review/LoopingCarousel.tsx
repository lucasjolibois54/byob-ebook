"use client";
import React, { useEffect, useRef, useState, ReactNode } from "react";

interface LoopingCarouselProps {
  speed?: number;
  pauseOnHover?: boolean;
  cardWidth?: number;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  borderColor?: string;
  borderWidth?: string;
  direction?: "left" | "right";
  cardClassName?: string;
  children: ReactNode[];
}

const LoopingCarousel: React.FC<LoopingCarouselProps> = ({
  speed = 100,
  pauseOnHover = true,
  cardWidth = 256,
  backgroundColor = "bg-gray-50/10",
  hoverBackgroundColor = "hover:bg-gray-50/15",
  borderColor = "border-gray-50/10",
  borderWidth = "border",
  direction = "left",
  cardClassName = "",
  children,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cardsToShow, setCardsToShow] = useState<ReactNode[]>([]);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollWidth = scrollRef.current.offsetWidth;
    const totalCardsNeeded = Math.ceil(scrollWidth / cardWidth) * 2;
    const repeatedCards = Array(totalCardsNeeded).fill(children).flat();

    setCardsToShow(repeatedCards);
  }, [children, cardWidth]);

  const styles = `
    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    @keyframes scroll-right {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }

    .scroll {
      display: flex;
      overflow: hidden;
      white-space: nowrap;
    }

    .scroll-content {
      display: flex;
      animation: ${direction === "left" ? "scroll-left" : "scroll-right"} ${speed}s linear infinite;
    }

    ${pauseOnHover ? ".scroll-content:hover { animation-play-state: paused; }" : ""}
  `;

  return (
    <div className="relative w-full items-center overflow-hidden rounded-lg">
      <style>{styles}</style>
      <div className="scroll" ref={scrollRef}>
        <div className="scroll-content">
          {cardsToShow.map((cardContent, index) => (
            <div
              key={index}
              className={`relative mx-4 cursor-pointer overflow-hidden rounded-xl p-4 ${backgroundColor} ${borderColor} ${borderWidth} ${hoverBackgroundColor} ${cardClassName}`}
              style={{ width: `${cardWidth}px`, wordWrap: "break-word", whiteSpace: "normal" }}
            >
              {cardContent}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoopingCarousel;
