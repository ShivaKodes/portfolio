import React from "react";

export default function Header() {
  return (
    <header
      className="w-full  text-[#fff] font-serif grid grid-cols-12 gap-5  py-4 text-xl px-2 tablet:text-3xl tablet:px-0"
      id="header"
    >
      <ul className="flex justify-evenly items-center w-full col-start-1 col-span-full ">
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#getintouch">Contact</a>
        </li>
      </ul>
    </header>
  );
}
