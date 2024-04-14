"use client"

import React, { useState, useEffect } from "react";
import NavBar from "./navBar";
import HeroText from "./HeroText";
import HeroImages from "./HeroImages";
import HeroFooter from "./HeroFooter";
import Loading from "./Loading";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center mt-10 flex-shrink-0">
      <div
        className="animate-zoomOut absolute w-full h-full"
        style={{
          backgroundImage: "url(/assets/heroBottom.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "bottom",
        }}
      />
      <div className="flex flex-col relative">
        <NavBar />
        {isLoading ? <Loading /> : (
          <>
            <HeroText />
            <HeroImages />
            <HeroFooter />
          </>
        )}
      </div>
    </div>
  );
}