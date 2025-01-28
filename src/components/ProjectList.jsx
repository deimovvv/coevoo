import ProjectCard from "./ProjectCard";
import { getData } from "../helpers/getData";
import { useMemo } from "react";

const ProjectList = ({ category }) => {

  const projects = useMemo( () => getData(category), [category]);

  return (
    <>
      {projects.map((project) => (
       <ProjectCard key={project.id} {...project} /> 

      ))}
    </>
  );
};

export default ProjectList;



