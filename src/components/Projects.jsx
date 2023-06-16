import { useState } from "react";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
import { projectData } from "../data/projectData";
import Modal from "./Modal";

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 1 });

  return (
    <div className="min-h-screen flex items-center  justify-center relative">
      <section
        className="grid grid-cols-12 px-5 tablet:px-10 gap-5 col-span-full sm:px-5 w-full"
        id="projects"
      >
        <SectionHeader title={"Projects"} />
        {projectData.map((project, index) => (
          <ProjectCard
            project={project}
            key={project.id}
            index={index}
            setModal={setModal}
          />
        ))}
      </section>
      <Modal modal={modal} projects={projectData} />
    </div>
  );
}
