import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function Card({
  image,
  gitLink,
  title,
  deployedLink,
  description,
}) {
  return (
    <section className="w-fit drop-shadow-lg relative transition-shadow hover:shadow-black group h-[280px] overflow-hidden bg-gradient-to-tr from-light-blue to-beige rounded-lg">
      <img
        src={image}
        alt=""
        className="rounded-md w-96 h-full object-contain "
      />
      <div className=" overlay absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-transparent  group-hover:to-black/70 rounded-lg h-full w-full "></div>
      <div className="overlay-content absolute inset-0 translate-y-[40%] transition-all duration-200 ease-in group-hover:translate-y-0 flex items-center justify-center flex-col  bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-transparent group-hover:via-black/30  group-hover:to-black/70">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-base px-5 text-center text-[#ececec] mb-6">
          {description}
        </p>
        <span className=" flex items-center">
          {" "}
          <a
            href={`${gitLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 hover:text-pink"
          >
            <span className="flex items-center">
              {" "}
              github <BsArrowUpRight />
            </span>
          </a>
          <a
            href={`${deployedLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink"
          >
            <span className="flex items-center">
              {" "}
              Try Here <BsArrowUpRight />
            </span>
          </a>
        </span>
      </div>
    </section>
  );
}
