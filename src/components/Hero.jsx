import React from "react";
import Card from "./Card";
import { devices } from "./devices";

import cardData from "../data/data";
import ContactLinks from "./ContactLinks";

export default function Hero() {
  const card = cardData.map((item) => {
    return (
      <Card
        title={item.title}
        image={item.image}
        gitLink={item.githubLink}
        deployedLink={item.deployedLink}
        description={item.description}
      />
    );
  });

  return (
    <section
      className="w-full min-h-screen text-[#fff]  flex flex-col pt-28 "
      id="project"
    >
      <div className="max-w-1/2 z-10 text-white mx-auto text-center ">
        <h1 className="text-5xl font-semibold">Hi! I am Shiva Kumar</h1>
        <p className="text-xl">A frontend Developer based out of India</p>
        <p className="text-lg leading-5 mt-4 ">
          I am still working on this portfolio <br />
          but you can have a look on my projects.
        </p>
      </div>

      <ContactLinks />

      <div className="grid grid-cols-auto-fit w-full gap-5 justify-items-center  px-10  mt-10 mb-20">
        {card}
      </div>
    </section>
  );
}
