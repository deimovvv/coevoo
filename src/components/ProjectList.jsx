import ProjectCard from "./ProjectCard";
import { getData } from "../helpers/getData";

const ProjectList = ({ publisher }) => {
  const projects = getData(publisher);

  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </>
  );
};

export default ProjectList;
