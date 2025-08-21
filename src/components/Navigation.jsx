import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import "boxicons";

const NavContainer = styled(motion.nav)`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  background: rgba(15, 15, 15, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(120, 120, 120, 0.1);
  z-index: 999999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 70px;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 1000000;
`;

const LogoImg = styled.img`
  width: 120px;
  height: auto;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    width: 100px;
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const LanguageButton = styled.button`
  background: rgba(40, 40, 40, 0.3);
  border: 1px solid rgba(120, 120, 120, 0.2);
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 0.85rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(60, 60, 60, 0.4);
    border-color: rgba(173, 216, 230, 0.4);
    color: rgba(255, 255, 255, 0.95);
  }

  &:after {
    content: '▼';
    font-size: 0.7rem;
    color: rgb(170, 144, 165);
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

const LanguageDivider = styled.div`
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.2);
`;

const LanguageDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const LanguageMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: rgba(20, 20, 20, 0.95);
  border: 1px solid rgba(120, 120, 120, 0.2);
  border-radius: 8px;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  overflow: hidden;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.3s ease;
  min-width: 140px;
`;

const LanguageOption = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  color: ${props => props.active ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.7)'};
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 0.85rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  cursor: pointer;
  padding: 0.75rem 1rem;
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: rgba(60, 60, 60, 0.3);
    color: rgba(255, 255, 255, 0.95);
  }

  &:after {
    content: ${props => props.active ? "'✓'" : "''"};
    color: rgb(170, 144, 165);
    font-size: 0.8rem;
  }
`;

const ScrollToTopLink = ({ to, children, ...props }) => {
  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };
  
  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

const NavLink = styled(ScrollToTopLink)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 0.8rem 0;
  margin: 0 1.5rem;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.className && props.className.includes('active') ? '80%' : '0%'};
    height: 1px;
    background: linear-gradient(90deg, #add8e6, #90ee90);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: rgba(255, 255, 255, 0.95);
    
    &:after {
      width: 80%;
    }
  }
  
  &.active {
    color: rgba(255, 255, 255, 0.95);
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 70px;
  right: 0;
  width: 280px;
  height: auto;
  background-color: rgba(20, 20, 20, 0.98);
  backdrop-filter: blur(20px);
  z-index: 999998;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-left: 1px solid rgba(120, 120, 120, 0.2);
  border-bottom: 1px solid rgba(120, 120, 120, 0.2);
  border-bottom-left-radius: 20px;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999997;
  backdrop-filter: blur(5px);
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled(ScrollToTopLink)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  margin: 0.8rem 0;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(120, 120, 120, 0.2);
  transition: color 0.3s ease;

  &:hover {
    color: rgb(170, 144, 165);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const mobileMenuVariants = {
  open: { x: 0, opacity: 1 },
  closed: { x: "100%", opacity: 0 },
};

const backdropVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'EN');
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
    // Disparar evento personalizado para que otros componentes se actualicen
    window.dispatchEvent(new Event('languageChange'));
  };

  // Cargar idioma guardado
  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'EN';
    setCurrentLanguage(savedLang);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-dropdown')) {
        setLanguageDropdownOpen(false);
      }
      if (!event.target.closest('.solutions-dropdown')) {
        setSolutionsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const translations = {
    ES: {
      home: 'Inicio',
      projects: 'Proyectos',
      solutions: 'Soluciones',
      creativeFlowAI: 'CreativeFlow AI',
      aboutUs: 'Nosotros'
    },
    EN: {
      home: 'Home',
      projects: 'Projects',
      solutions: 'Solutions',
      creativeFlowAI: 'CreativeFlow AI',
      aboutUs: 'About Us'
    },
    DE: {
      home: 'Startseite',
      projects: 'Projekte',
      solutions: 'Lösungen',
      creativeFlowAI: 'CreativeFlow AI',
      aboutUs: 'Über Uns'
    }
  };

  const t = translations[currentLanguage];

  // Close mobile menu when route changes and scroll to top
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <NavContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          background: scrolled 
            ? 'rgba(15, 15, 15, 0.98)' 
            : 'rgba(15, 15, 15, 0.95)'
        }}
      >
        {/* Logo */}
        <LogoContainer to="/">
          <LogoImg src="/assets/isocoevo.png" alt="Coevo Studio Logo" />
        </LogoContainer>

        {/* Desktop Menu */}
        <DesktopMenu>
          <NavLink 
            to="/" 
            className={isActive('/') ? 'active' : ''}
          >
            {t.home}
          </NavLink>
          <NavLink 
            to="/projects" 
            className={isActive('/projects') ? 'active' : ''}
          >
            {t.projects}
          </NavLink>
          
          <LanguageDropdown className="solutions-dropdown">
            <NavLink
              as="div"
              onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              {t.solutions}
              <span style={{ 
                marginLeft: '5px', 
                fontSize: '0.7rem', 
                color: 'rgb(170, 144, 165)',
                transform: solutionsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
                display: 'inline-block'
              }}>▼</span>
            </NavLink>
            <LanguageMenu isOpen={solutionsDropdownOpen}>
              <LanguageOption 
                onClick={() => {
                  setSolutionsDropdownOpen(false);
                }}
              >
                <ScrollToTopLink to="/creativeflow-ai">
                  {t.creativeFlowAI}
                </ScrollToTopLink>
              </LanguageOption>
            </LanguageMenu>
          </LanguageDropdown>
          
          <NavLink 
            to="/aboutus" 
            className={isActive('/aboutus') ? 'active' : ''}
          >
            {t.aboutUs}
          </NavLink>
          
          <LanguageSelector>
            <LanguageDropdown className="language-dropdown">
              <LanguageButton 
                isOpen={languageDropdownOpen}
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              >
                {currentLanguage}
              </LanguageButton>
              <LanguageMenu isOpen={languageDropdownOpen}>
                <LanguageOption 
                  active={currentLanguage === 'EN'} 
                  onClick={() => {
                    changeLanguage('EN');
                    setLanguageDropdownOpen(false);
                  }}
                >
                  English
                </LanguageOption>
                <LanguageOption 
                  active={currentLanguage === 'ES'} 
                  onClick={() => {
                    changeLanguage('ES');
                    setLanguageDropdownOpen(false);
                  }}
                >
                  Español
                </LanguageOption>
                <LanguageOption 
                  active={currentLanguage === 'DE'} 
                  onClick={() => {
                    changeLanguage('DE');
                    setLanguageDropdownOpen(false);
                  }}
                >
                  Deutsch
                </LanguageOption>
              </LanguageMenu>
            </LanguageDropdown>
          </LanguageSelector>
        </DesktopMenu>

        {/* Mobile Menu Button */}
        <MobileMenuButton onClick={toggleMobileMenu}>
          <box-icon 
            name={isMobileMenuOpen ? "x" : "menu-alt-right"} 
            color="#ffffff" 
            size="32px"
          />
        </MobileMenuButton>
      </NavContainer>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <MobileBackdrop
          initial="closed"
          animate="open"
          exit="closed"
          variants={backdropVariants}
          transition={{ duration: 0.3 }}
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <MobileMenu
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <MobileNavLink to="/" onClick={toggleMobileMenu}>
          {t.home}
        </MobileNavLink>
        <MobileNavLink to="/projects" onClick={toggleMobileMenu}>
          {t.projects}
        </MobileNavLink>
        <MobileNavLink to="/aboutus" onClick={toggleMobileMenu}>
          {t.aboutUs}
        </MobileNavLink>
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <LanguageButton 
            active={currentLanguage === 'ES'} 
            onClick={() => changeLanguage('ES')}
          >
            ES
          </LanguageButton>
          <LanguageButton 
            active={currentLanguage === 'EN'} 
            onClick={() => changeLanguage('EN')}
          >
            EN
          </LanguageButton>
          <LanguageButton 
            active={currentLanguage === 'DE'} 
            onClick={() => changeLanguage('DE')}
          >
            DE
          </LanguageButton>
        </div>
      </MobileMenu>
    </>
  );
};

export default Navigation;