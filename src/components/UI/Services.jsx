import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const ServiceRow = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(120, 120, 120, 0.3);
  padding: 20px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(60, 60, 60, 0.2);
  }

  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

const RowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ServiceTitle = styled.h3`
  font-size: 3rem;
  color: #fff;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ServiceNumber = styled.span`
  color: rgb(170, 144, 165);
  margin-right: 8px;
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ToggleIcon = styled.div`
  font-size: 1.2rem;
  color: #fff;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ServiceDetails = styled.div`
  margin-top: 10px;
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height ${({ isOpen }) => (isOpen ? "2s" : "0s")} ease; /* Transición rápida al cerrar */
`;

const ServiceDescription = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const SubservicesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SubserviceItem = styled.li`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin: 5px 0;
  position: relative;
  padding-left: 15px;
  
  &:before {
    content: '•';
    color: rgba(144, 238, 144, 0.8);
    position: absolute;
    left: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const services = [
  {
    logo: "service4.png",
    title: "AI Solutions",
    description: "We harness the power of Artificial Intelligence to create groundbreaking solutions and redefine creativity.",
    subservices: [
      "AI Content Generation",
      "Chatbots AI",
      "AI Agents",
      "Machine Learning Models",
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
  {
    logo: "service1.png",
    title: "Web Design",
    description:
      "We design and develop responsive, high-performance websites that combine cutting-edge technology with visually stunning design.",
    subservices: [
      "3D websites integration",
      "Frontend Development",
      "Backend Development",
      "E-commerce Solutions",
      "Art Direction",
    ],
  },
  {
    logo: "service2.png",
    title: "Audiovisual Production",
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
            transition={{ duration: 0.2, delay: index * 0.1 }}
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