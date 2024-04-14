import React from "react";

export default function HeroText() {
  return (
    <div className="flex flex-col items-start pt-[190px] w-[50%] animate-slideRight">
      <h1
        style={{ fontFamily: "ClashDisplay-Medium" }}
        className="text-white text-[32px] leading-normal uppercase"
      >
        RAPID APP DEVELOPMENT
      </h1>
      <p className="text-white text-[18px] font-medium text-justify leading-normal w-[350px] pt-[32px]">
        Unlock your app's potential with CodeFest - Offering lightning-fast
        Rapid App Development services. Turn your ideas into reality with our
        expert team and accelerate your business success today!
      </p>
      <img src="/assets/line.svg" alt="line" className="w-[150px] h-[4px]" />
    </div>
  );
}