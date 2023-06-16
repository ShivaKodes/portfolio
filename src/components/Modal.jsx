import React from "react";

export default function Modal({ modal, projects }) {
  const { active, index } = modal;
  return (
    <div className="modalContainer h-[350px] w-[400px] flex items-center justify-center absolute col-span-full overflow-hidden">
      <div
        className="modalSlider h-full w-full absolute transition top duration-500 ease-Quart"
        style={{ top: index * -100 + "%" }}
      >
        {projects.map((project, index) => {
          const { image, color } = project;
          return (
            <div
              className="modal relative h-full flex items-center justify-center"
              key={index}
            >
              <img
                src={image}
                alt="image"
                className="modalImg h-auto w-full "
                width={300}
                height={0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
