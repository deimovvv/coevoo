  import { useRef, useState } from "react";
  import { Link } from "react-router-dom";
  import { motion, AnimatePresence } from "framer-motion";
  import styled from "styled-components";
  /* import "../css/style.css"; */

  const Menu = styled.h4`
    font-family: "Syncopate", sans-serif;
    font-size: 1rem;
    color: white;
    font-weight: 1000;
    margin: 10px;
    z-index: 1000;
  `;

  const MenuContainer = styled(motion.div)`
    z-index: 1001; /* Asegúrate de que el menú tenga un z-index alto */
  `;

  const MenuOverlay = () => {
    const [open, setOpen] = useState(false);

    const ham = useRef();
    const cruz = useRef();
    const menu = useRef();

    const isOpen = () => {
      setOpen(true);
      if (ham.current) {
        ham.current.style.display = "none";
      }
      if (menu.current) {
        menu.current.style.display = "none";
      }
    };

    const isClose = () => {
      setOpen(false);
      if (ham.current) {
        ham.current.style.display = "block";
      }
      if (menu.current) {
        menu.current.style.display = "block";
      }
    };

    const item = {
      exit: {
        opacity: 0,
        height: 0,
        transition: {
          ease: "easeInOut",
          duration: 0.3,
          delay: 0.1,
        },
      },
    };

    return (
      <>
        <header className="header">
          <div onClick={isOpen} className="menu">
            <Menu ref={menu}>menu</Menu>
            <box-icon
              name="menu-alt-right"
              color="#ffffff"
              size="34px"
              ref={ham}
            ></box-icon>
          </div>
        </header>
        <AnimatePresence>
          {open && (
            <MenuContainer
              className="menu_container"
              variants={item}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit="exit"
            >
              <div  onClick={isClose} className="btn_close">
                <box-icon
                  ref={cruz}
                  name="x"
                  color="#ffffff"
                  size="62px"
                ></box-icon>
              </div>
              <Link className="link_menu" to="/">
                <motion.h5
                  className="animate__animated animate__fadeIn"
                  initial={{ y: 90, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.28, duration: 0.48 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                >
                  Home
                </motion.h5>
              </Link>
              <Link className="link_menu" to="/projects">
                <motion.h5
                  className="animate__animated animate__fadeIn"
                  initial={{ y: 90, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.55 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                >
                  Projects
                </motion.h5>
              </Link>
              <Link className="link_menu" to="/services">
                <motion.h5
                  className="animate__animated animate__fadeIn"
                  initial={{ y: 90, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.55 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                >
                  Services
                </motion.h5>
              </Link>
              <Link className="link_menu" to="/aboutus">
                <motion.h5
                  initial={{ y: 90, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.1,
                    },
                  }}
                >
                  About Us
                </motion.h5>
              </Link>
              <Link className="link_menu" to="/contact">
                <motion.h5
                  initial={{ y: 90, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.6,
                    },
                  }}
                >
                  Contact
                </motion.h5>
              </Link>
            </MenuContainer>
          )}
        </AnimatePresence>
      </>
    );
  };

  export default MenuOverlay;