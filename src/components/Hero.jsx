import React from "react";
import HeroText from "./HeroText";

export default function Hero() {
  // const card = cardData.map((item) => {
  //   return (
  //     <Card
  //       title={item.title}
  //       image={item.image}
  //       gitLink={item.githubLink}
  //       deployedLink={item.deployedLink}
  //       description={item.description}
  //     />
  //   );
  // });

  return (
    <section
      className="w-full  text-[#fff]  pt-10  col-span-full select-none grid grid-cols-6 px-2 tablet:px-10 gap-5 tablet:grid-cols-12 "
      id="project"
    >
      <div className="max-w-1/2 z-10 text-white mx-auto text-center col-span-full">
        <h1
          className="text-[clamp(1.5rem,1rem+10vw,6rem)]
         font-serif text-lime flex flex-col items-center"
        >
          <span className="m-0">Front end</span>{" "}
          <span
            className="leading-tight
          "
          >
            Developer
          </span>
        </h1>
      </div>
      <HeroText />
    </section>
  );
}
