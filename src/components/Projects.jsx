import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section
      className="grid grid-cols-12 px-5 tablet:px-10 gap-5 col-span-full sm:px-5"
      id="projects"
    >
      <SectionHeader title={"Projects"} />
      <ProjectCard />
    </section>
  );
}
