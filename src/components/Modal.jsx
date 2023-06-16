import React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect } from "react";
import { useRef } from "react";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({ modal, projects }) {
  const { active, index } = modal;
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      // moveContainerX(clientX);
      // moveContainerY(clientY);
      // console.log(clientX, clientY);
      moveCursorLabelX(clientX);
      moveCursorLabelY(clientY);
      moveCursorX(clientX);
      moveCursorY(clientY);
    });
  }, []);

  return (
    <>
      <motion.div
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className="modalContainer h-[350px] w-[400px] flex items-center justify-center absolute overflow-hidden pointer-events-none"
        ref={container}
      >
        <div
          className="modalSlider h-full w-full absolute transition-[top] duration-500 ease-ease-Quart"
          style={{ top: index * -100 + "%" }}
        >
          {projects.map((project, index) => {
            const { image, color } = project;
            return (
              <div
                className="modal relative h-full flex items-center justify-center rounded shadow-xl"
                key={index}
              >
                <img
                  src={image}
                  alt="image"
                  className="modalImg h-auto w-full rounded"
                  width={300}
                  height={0}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className="cursor w-16 h-16 bg-lime absolute user-select-none rounded-full pointer-events-none"
        ref={cursor}
      ></motion.div>
      <motion.div
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className="cursoeLabel  w-16 h-16 bg-lime absolute user-select-none rounded-full flex items-center justify-center text-white bg-transparent pointer-events-none"
        ref={cursorLabel}
      >
        View
      </motion.div>
    </>
  );
}
