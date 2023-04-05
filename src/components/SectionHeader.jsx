import React from "react";

export default function SectionHeader({ title, mb }) {
  return (
    <h2
      className={`text-4xl font-serif text-lime text-center mb-7
       mt-20 col-span-full`}
    >
      {title}
    </h2>
  );
}
