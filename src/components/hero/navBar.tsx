import React from "react";

const navItems = ["HOME", "ABOUT US", "SERVICES", "CONTACT"];

export default function NavBar() {
  return (
    <nav className="inline-flex items-center gap-[267px] animate-slideDown">
      <img
        src="/assets/logo.svg"
        alt="logo"
        className="w-24 h-16 cursor-pointer"
      />
      <ul className="flex gap-6 items-center justify-center">
        {navItems.map((item, index) => (
          <li
            key={index}
            style={{ fontFamily: "ClashDisplay-Medium" }}
            className="group flex flex-col px-6 py-2 justify-center items-center gap-2 text-white cursor-pointer uppercase text-[20px] hover:text-[#FF9000] hover:font-[600] relative transform transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative">
              {item}
              <img
                src="/assets/line.svg"
                alt="line"
                className="absolute left-0 bottom-[-10px] w-full h-[4px] hidden group-hover:block transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none"
              />
            </div>
          </li>
        ))}
      </ul>
      <img
        src="/assets/codeReq.svg"
        alt="codeReq"
        className="w-14 h-14 cursor-pointer"
      />
    </nav>
  );
}