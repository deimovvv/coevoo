import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; // Importa los íconos de LinkedIn e Instagram

const FooterContainer = styled(motion.footer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  padding: 80px; /* Aumenta el padding para hacer el footer más alto */
  width: 100%;
  position: relative;
  bottom: 0;
  min-height: 500px; /* Establece una altura mínima mayor para el footer */
  border-top: 5px solid rgb(170, 144, 165); /* Agrega un borde decorativo */
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1600px; /* Aumenta el ancho máximo */
  padding: 40px; /* Aumenta el padding */
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContactItem = styled.p`
  margin: 15px 0; /* Aumenta el margen */
  font-size: 1.8rem; /* Aumenta el tamaño de fuente */
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px; /* Aumenta el margen superior */
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 2.5rem; /* Aumenta el tamaño de fuente */
  margin: 0 20px; /* Aumenta el margen */
  text-decoration: none;
  &:hover {
    color: rgb(190, 90, 181);
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem; /* Aumenta el tamaño de fuente */
  text-align: center;
  margin-top: 40px; /* Aumenta el margen superior */
  width: 100%;
`;

const FollowUs = styled.p`
  font-size: 1.5rem; /* Aumenta el tamaño de fuente */
  margin-right: 10px;
`;

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <FooterContainer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <TopSection>
        <ContactSection>
          <ContactItem>Email: coevo-agency@gmail.com</ContactItem>
          <ContactItem>Phone: +54 2345 688262</ContactItem>
          <ContactItem>Address: Juan Domingo Peron 2425, Buenos Aires</ContactItem>
        </ContactSection>
        <SocialSection>
          <FollowUs>Follow Us</FollowUs>
          <SocialIcons>
            <SocialIcon href="https://www.linkedin.com/search/results/all/?keywords=coevo&origin=GLOBAL_SEARCH_HEADER&sid=n)%2C" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/_coevo_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
          </SocialIcons>
        </SocialSection>
      </TopSection>
      <Copyright>©2025 Coevo Studio. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;