import SectionHeader from "./SectionHeader";
import { BsArrowUpRight } from "react-icons/bs";
export default function Message() {
  return (
    <section
      className="w-full grid grid-cols-12 px-5 tablet:px-10 gap-5  col-span-full text-white/90  items-center font-mulish "
      id="leaveamessage"
    >
      <SectionHeader title="Leave a Message" />
      <p className="text-xl col-span-full text-center">
        Your feedback, suggestion or any advice would help me be better.{" "}
      </p>
      <form
        action=""
        className="w-full flex justify-between text-xl mt-12 col-span-full relative"
      >
        <div className="flex flex-col w-5/12 gap-5 ">
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Fullname"
            className="bg-transparent border-b-2 border-white/50 focus:outline-none focus:border-white/90 w-full"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="bg-transparent border-b-2 border-white/50 focus:outline-none focus:border-white/90 w-full"
          />
        </div>
        <div className="flex flex-col w-5/12 gap-5">
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Country"
            className="bg-transparent border-b-2 border-white/50 focus:outline-none focus:border-white/90 w-full"
          />
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            className="bg-transparent border-b-2 border-white/50 focus:outline-none focus:border-white/90 w-full"
          />
        </div>
        <button className="absolute -bottom-16 right-5 flex items-center gap-1 text-2xl group border border-lime px-2 rounded-full">
          Send
          <span className=" font-mulish text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <BsArrowUpRight style={{}} />
          </span>
        </button>
      </form>
    </section>
  );
}
