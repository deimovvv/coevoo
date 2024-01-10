import ServicesCard from "./ServicesCard";
import { getServices  } from "../helpers/getServices";
import { useMemo } from "react";

const ProjectList = ({ category }) => {

  const services = useMemo( () => getServices(category));


  return (
    <>
      {services.map((service) => (
        <ServicesCard key={service.id} {...service}
        />
      ))}
    </>
  );
};

export default ProjectList;
