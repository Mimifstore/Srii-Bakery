import React from 'react';
import { useState } from "react"

function Navbar() {
  const [active, setActive] = useState("");

  const menuItems = ["Home", "About", "Product", "Contact"];

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50 py-4 px-4 md:px-10 flex flex-wrap justify-center items-center">
      <ul className="flex gap-1 md:gap-20 font-semibold text-[#7b4a16] text-[16px] md:text-[18px]">
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className={`px-1 py-1 rounded-md cursor-pointer transition duration-280
              ${active === item ? "bg-[#7b4a16] text-white" : "hover:bg-[#7b4a16] hover:text-white"}
              ${item === "Product" ? "ml-30" : ""}
            `}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
      </nav>
  );
}

export default Navbar;