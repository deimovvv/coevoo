import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import "../css/style.css";

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  align-items: center;
  justify-items: center;
  gap: 20px;

  @media screen and (max-width: 64em) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 40em) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;

  ${TeamMember}:hover & {
    transform: scale(1.04);
  }
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
  margin-top: 10px;
  color: #fff;
`;

const TeamRole = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  margin-top: 5px;
  color: #ccc;
`;

const Title = styled.h3`
  font-family: "Syncopate", sans-serif;
  text-transform: uppercase;
  padding: 3rem 5rem;

  @media screen and (max-width: 48em) {
    font-size: 10px;
  }
`;

const Flecha = styled.div`
  margin-top: 10px;
`;

const Team = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Deimov',
      role: 'Co-founder / Creative Director / Creative Coding / Sound Design / VFX / Media Artist',
      imageSrc: '/assets/deimovAI.jpg',
      link: 'https://www.instagram.com/deimovvv/',
    },
    {
      id: 2,
      name: 'Cora',
      role: 'Co-founder | Creative Director | Cinematic | CGI',
      imageSrc: '/team/divinaglitch.jpg',
      link: 'https://www.instagram.com/divina.glitch/',
    },
    {
      id: 3,
      name: 'Keyla',
      role: 'Digital Fashion | Art Director | Creative Coding',
      imageSrc: '/team/keyla.jpg',
      link: 'https://www.instagram.com/keyla___000/',
    },
    {
      id: 4,
      name: 'Juno',
      role: 'Sound Design | Immersive Audio | Creative Coding | Generative AI | Media Artist',
      imageSrc: '/team/juno.png',
      link: 'https://www.linkedin.com/in/juno-nedic-3022031b8/',
    },
  ];

  return (
    <>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, ease: "circOut", duration: 1 }}
      >
        <Title>
          <h3>Team</h3>
        </Title>

        <TeamContainer>
          {teamMembers.map((member) => (
            <TeamMember key={member.id} variants={fadeInUp}>
              <TeamImage src={member.imageSrc} alt={member.name} />
              <a className="a" href={member.link} target="_blank" rel="noopener noreferrer">
                <TeamName>{member.name}</TeamName>
              </a>
              <TeamRole>{member.role}</TeamRole>
              <a className="a" href={member.link} target="_blank" rel="noopener noreferrer">
                <Flecha>
                  <box-icon
                    className="flecha"
                    animation="flashing"
                    name="right-arrow-alt"
                    flip="vertical"
                    color="#ffffff"
                  ></box-icon>
                </Flecha>
              </a>
            </TeamMember>
          ))}
        </TeamContainer>
      </motion.div>
    </>
  );
};

export default Team;