import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesContainer = styled.div`
  width: 100%;
  max-width: 1200px; /* Aumentado para que sea más ancho */
  margin: 0 auto;
  padding: 80px 20px; /* Reducido para que quede más cerca del BrandSlider */
`;

const ServiceRow = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #444;
  padding: 20px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1); /* Color de fondo al hacer hover */
  }
`;

const RowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ServiceTitle = styled.h3`
  font-size: 3rem;
  color: #fff; /* Letra blanca */
  display: flex;
  align-items: center;
`;

const ServiceNumber = styled.span`
  color: rgb(170, 144, 165); /* Color personalizado para el número */
  margin-right: 8px; /* Espacio entre el número y el título */
  font-size: 3rem;
`;

const ToggleIcon = styled.div`
  font-size: 1.2rem;
  color: #fff; /* Letra blanca */
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s ease;
`;

const ServiceDetails = styled.div`
  margin-top: 10px;
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 2s ease;
`;

const ServiceDescription = styled.p`
  color: #fff; /* Letra blanca */
  font-size: 1rem;
  margin-bottom: 10px;
`;

const SubservicesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SubserviceItem = styled.li`
  color: #ccc; /* Subtítulos con tono gris claro */
  font-size: 0.9rem;
  margin: 5px 0;
`;

const services = [
  {
    logo: "service4.png",
    title: "AI-Driven Content and Solutions",
    description: "We harness the power of Artificial Intelligence to create groundbreaking solutions and redefine creativity.",
    subservices: [
      "AI Content Generation",
      "Machine Learning Models",
      "Chatbots AI",
      "AI Agents",
    ],
  },
  {
    logo: "service1.png",
    title: "Web Development",
    description:
      "We design and develop responsive, high-performance websites that combine cutting-edge technology with visually stunning design.",
    subservices: [
      "3D websites integration",
      "Frontend Development",
      "Backend Development",
      "E-commerce Solutions",
    ],
  },
  {
    logo: "service2.png",
    title: "Advanced Audiovisual Production",
    description:
      "We create innovative audiovisual content that merges art, design, and technology to tell stories in unique ways.",
    subservices: [
      "Video Production",
      "Motion Graphics",
      "3D Animation",
      "Sound Design",
      "Visual Effects",
    ],
  },
  {
    logo: "service3.png",
    title: "Immersive and Interactive Experiences",
    description:
      "VR/MR experiences, Kinect/Lidar-based interactions, and immersive worlds for events or exhibitions.",
    subservices: [
      "Virtual Reality",
      "Mixed Reality",
      "Interactive Installations",
      "Immersive Events",
    ],
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ServicesContainer id="services-section">
      {services.map((service, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.1,
        });

        return (
          <ServiceRow
            key={index}
            onClick={() => toggleService(index)}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <RowHeader>
              <ServiceTitle>
                <ServiceNumber>{`${index + 1}.`}</ServiceNumber>
                {service.title}
              </ServiceTitle>
              <ToggleIcon isOpen={openIndex === index}>▼</ToggleIcon>
            </RowHeader>
            <ServiceDetails isOpen={openIndex === index}>
              <ServiceDescription>{service.description}</ServiceDescription>
              <SubservicesList>
                {service.subservices.map((subservice, subIndex) => (
                  <SubserviceItem key={subIndex}>{subservice}</SubserviceItem>
                ))}
              </SubservicesList>
            </ServiceDetails>
          </ServiceRow>
        );
      })}
    </ServicesContainer>
  );
};

export default Services;