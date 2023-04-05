import React from "react";
import Pill from "./Pill";
import SectionHeader from "./SectionHeader";
import Skillsfooter from "./SkillsFooter";

export default function Tools() {
  const pills = [
    "HTML",
    "CSS",
    "React",
    "Tailwind",
    "Redux",
    "Node Js",
    "figma",
    "express Js",
    "MongoDB",
    "firebase",
    "git/github",
    ,
  ].map((pill, index) => <Pill text={pill} key={index} px={"px-3"} />);

  // text-[clamp( 1rem, 0.9285714285714286rem + 0.35714285714285715vw, 1.3rem )]
  return (
    <section
      className="grid  grid-cols-6 px-5  gap-5  col-span-full text-white tablet:grid-cols-12 tablet:px-8"
      id="skills"
    >
      <SectionHeader title={"Skills"} />
      <div
        className="w-full tablet:w-1/2 flex gap-y-3 items-center  flex-wrap col-span-full mx-auto"
        style={{ flex: "1 0 auto" }}
      >
        {pills}
      </div>
      <div className="col-span-full mt-20 flex items-center gap-10 text-[clamp(1rem,0.9285714285714286rem+0.35714285714285715vw,1.25rem)]">
        <Skillsfooter text={"frontend"} />
        <Skillsfooter text={"ui/ux"} />
        <Skillsfooter text={"basic backend"} />
      </div>
    </section>
  );
}
