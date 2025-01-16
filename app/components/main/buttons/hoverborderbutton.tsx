"use client";
import React from "react";
import { HoverBorderGradient } from "../../ui/hover-border-gradient";

export function HoverBorderButton() {
  return (
    <div className="">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black  text-white  "
      >
      
        <span>Aceternity UI</span>
      </HoverBorderGradient>
    </div>
  );
}
