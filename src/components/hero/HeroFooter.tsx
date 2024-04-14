import React from "react";
import { zen } from "@/app/layout";

export default function HeroFooter() {
  return (
    <div className="animate-slideUp">
      <div className="mt-[340px]">
        <h4
          style={{
            fontFamily: `${zen.style.fontFamily}`,
            textShadow: "0px 5px 22px #000",
          }}
          className="text-[#FF9000] text-center text-[64px] leading-normal "
        >
          CodeFest
        </h4>
        <div className="relative">
          <p
            style={{
              fontFamily: "ClashDisplay-Regular",
              textShadow: "0px 5px 22px #000",
            }}
            className="text-white text-center text-[48px] leading-normal"
          >
            Innovation
          </p>
          <div className="w-[67px] h-[67px] flex-shrink-0 rounded-[10px] bg-[#FF9000] flex justify-center items-center cursor-pointer absolute top-[-10px] right-0 ">
            <img
              src="/assets/rocket.svg"
              alt="rocket"
              className="w-[43px] h-[43px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
