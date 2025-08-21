import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; // Importa los íconos de LinkedIn e Instagram

const FooterContainer = styled(motion.footer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(15,15,15,0.98) 0%, rgba(20,20,20,0.95) 100%);
  color: #fff;
  padding: 80px;
  width: 100%;
  position: relative;
  bottom: 0;
  z-index: 0;
  min-height: 500px;
  border-top: 1px solid rgba(120, 120, 120, 0.3);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 40px 20px;
    min-height: auto;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  filter: brightness(1.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const LogoText = styled.h3`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 3px;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    letter-spacing: 2px;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  padding: 40px;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 40px;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const ContactTitle = styled.h4`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 20px;
  color: rgb(170, 144, 165);
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
`;

const ContactItem = styled.p`
  margin: 10px 0;
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-family: 'Helvetica', 'Arial', sans-serif;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 50%;
  background: rgba(40, 40, 40, 0.3);

  &:hover {
    color: rgb(170, 144, 165);
    background: rgba(170, 144, 165, 0.1);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 8px;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  text-align: center;
  margin-top: 50px;
  width: 100%;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 300;
  letter-spacing: 0.5px;
  border-top: 1px solid rgba(120, 120, 120, 0.2);
  padding-top: 30px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 30px;
    padding-top: 20px;
  }
`;

const FollowUs = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  margin: 0;
  color: rgb(170, 144, 165);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Helvetica', 'Arial', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Footer = () => {
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'EN');

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(localStorage.getItem('language') || 'EN');
    };

    window.addEventListener('storage', handleLanguageChange);
    window.addEventListener('languageChange', handleLanguageChange);

    return () => {
      window.removeEventListener('storage', handleLanguageChange);
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const translations = {
    EN: {
      contact: 'Contact',
      followUs: 'Follow Us',
      copyright: '©2025 Coevo Studio. All rights reserved.'
    },
    ES: {
      contact: 'Contacto',
      followUs: 'Síguenos',
      copyright: '©2025 Coevo Studio. Todos los derechos reservados.'
    },
    DE: {
      contact: 'Kontakt',
      followUs: 'Folgen Sie uns',
      copyright: '©2025 Coevo Studio. Alle Rechte vorbehalten.'
    }
  };

  const t = translations[currentLanguage];

  return (
    <FooterContainer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <LogoSection>
        <Logo src="/assets/Logo33.png" alt="Coevo Studio Logo" />
      </LogoSection>

      <TopSection>
        <ContactSection>
          <ContactTitle>{t.contact}</ContactTitle>
          <ContactItem>coevo.agency@gmail.com</ContactItem>
          <ContactItem>+54 2345 688262</ContactItem>
          <ContactItem>Juan Domingo Peron 2425, Buenos Aires</ContactItem>
        </ContactSection>
        <SocialSection>
          <FollowUs>{t.followUs}</FollowUs>
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
      <Copyright>{t.copyright}</Copyright>
    </FooterContainer>
  );
};

export default Footer;