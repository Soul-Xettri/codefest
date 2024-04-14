"use client"

import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        position: "fixed", // Changed from "relative" to "fixed"
        top: "50%", // Added to center vertically
        left: "50%", // Added to center horizontally
        transform: "translate(-50%, -50%)", // Added to center perfectly
        width: "100%",
        height: "100%",
      }}
      className="flex justify-center items-center animate-zoomIn animate-fadeIn"
    >
      <div style={{ position: "absolute" }}>
        <img
          src="/assets/dimBulb.svg"
          alt="dim Bulb"
          className=" animate-grow w-[200px] h-[200px]"
          style={{ animation: "glow 3s infinite alternate, grow 2s forwards" }}
        />
      </div>
      <div style={{ position: "absolute" }}>
        <img
          src="/assets/glowBulb.svg"
          alt="glowing Bulb"
          className=" animate-grow w-[200px] h-[200px]"
          style={{ animation: "glow 3s infinite alternate-reverse, grow 2s forwards" }}
        />
      </div>
    </div>
  );
}