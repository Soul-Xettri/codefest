"use client";

import React from "react";

export default function HeroImages() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        marginTop: "-50px",
      }}
      className="flex justify-center items-center animate-zoomIn"
    >
      <div style={{ position: "absolute" }}>
        <img
          src="/assets/dimBulb.svg"
          alt="dim Bulb"
          className="transition-all duration-1000 w-full h-full"
          style={{
            animation: "glow 1s infinite alternate, grow 2s forwards",
          }}
        />
      </div>
      <div style={{ position: "absolute" }}>
        <img
          src="/assets/glowBulb.svg"
          alt="glowing Bulb"
          className="transition-all duration-1000 w-full h-full"
          style={{
            animation: "glow 1s infinite alternate-reverse, grow 2s forwards",
          }}
        />
      </div>
    </div>
  );
}