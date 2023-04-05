import React from "react";

export default function Pill({ text, py, my, px }) {
  return (
    <div
      className={`${px ? px : "px-2"} ${
        py ? py : "py-1"
      } border border-white rounded-full w-fit mr-2 ${
        my && my
      } tablet:px-4 text-[clamp(0.5rem,0.321rem+0.892vw,1.125rem)] hover:bg-lime hover:font-semibold hover:border-none hover:text-light-black transition-all duration-300 ease-in-out`}
    >
      {text}
    </div>
  );
}
