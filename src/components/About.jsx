import SectionHeader from "./SectionHeader";
import { BsArrowUpRight } from "react-icons/bs";
import Profile from "./Profile";
import Button from "./Button";

export default function About() {
  return (
    <section
      className="grid grid-cols-12 px-5 tablet:px-10 gap-5 col-span-full "
      id="about"
    >
      <SectionHeader title={"About me"} />
      <div className="col-span-full ">
        <div className=" col-span-full flex items-center justify-between">
          <Profile />
          <Button />
        </div>
        <div className="col-span-full mt-10 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10">
          <div className="text-justify">
            <p className="text-2xl font-light font-mulish text-white ">
              Hi, I'm Shiva, a passionate front end developer based in India. I
              love solving problems and building things with JavaScript and
              also, love to tinker around with React.
            </p>
          </div>
          <div className=" ">
            <p className="text-2xl font-light font-mulish text-white">
              With a solid foundation in web development and a hunger to keep
              learning, I'm excited to see where my skills take me.{" "}
            </p>
            <a
              href="#getintouch"
              className="text-2xl font-mulish flex mt-10 group text-lime font-semibold tracking-wider"
            >
              Let's Connect{" "}
              <BsArrowUpRight
                style={{ marginLeft: "5px" }}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
