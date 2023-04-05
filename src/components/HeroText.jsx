import { BsArrowDownRight, BsArrowUpLeft } from "react-icons/bs";

export default function HeroText() {
  return (
    <div className="flex mx-auto  col-span-full  gap-10 pl-12 pr-2 py-9 text-[clamp(0.875rem,0.48214285714285715rem+1.9642857142857142vw,2.25rem)]">
      <p className=" font-mulish font-light flex flex-col items-center relative">
        <span className="flex">
          <BsArrowUpLeft
            style={{ position: "absolute", top: "0px", left: "-1em" }}
          />
          Portfolio of
        </span>
        <span> Shiva Kumar</span>
      </p>
      <div className="w-1  bg-white"></div>
      <p className=" font-mulish font-light flex flex-col items-center relative">
        <span>Have a Project?</span>
        <span className="flex">
          {" "}
          Let's Talk
          <BsArrowDownRight
            style={{ position: "absolute", bottom: "0px", right: "0em" }}
          />
        </span>
      </p>
    </div>
  );
}
