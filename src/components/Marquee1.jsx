export default function Marquee({ text, span, afterSpan }) {
  return (
    <div className="col-span-full text-white font-serif text-4xl border-y-2 border-white/30 overflow-hidden mt-10">
      <div className="col-span-full  flex whitespace-nowrap ">
        <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mx-2 w-full min-w-fit">
          {text}{" "}
          <span className="font-mulish text-4xl italic text-lime">{span}</span>{" "}
          {afterSpan}
        </p>
        <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mx-2">
          Let's build something{" "}
          <span className="font-mulish text-4xl italic text-lime">
            Amazing!
          </span>{" "}
          together
        </p>
        <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mx-2">
          Let's build something{" "}
          <span className="font-mulish text-4xl italic text-lime">
            Amazing!
          </span>{" "}
          together
        </p>
        <p className="after:content after:w-4 after:h-4 after:bg-lime after:inline-block after:rounded-full after:mx-2">
          Let's build something{" "}
          <span className="font-mulish text-4xl italic text-lime">
            Amazing!
          </span>{" "}
          together
        </p>
      </div>
    </div>
  );
}
