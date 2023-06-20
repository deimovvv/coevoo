import ProjectCard from "./ProjectCard";
import { getData } from "../helpers/getData";
import { useMemo } from "react";

const ProjectList = ({ publisher }) => {

  const projects = useMemo( () => getData(publisher), [publisher]);

  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </>
  );
};

export default ProjectList;
