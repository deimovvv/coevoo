import Experience from "./experiences/Experience";
import Logo from "./Logo";
import "../css/style.css";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import MenuOverlay from "./MenuOverlay";
import { Helmet } from "react-helmet";




const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simula el tiempo de carga de la página
  }, []);

  return (
    <>
      <div className="wrapper">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Coevo Studio</title>
                <link rel="canonical" href="https://coevo-studio.com/" />
                <meta name="description" content="Coevo Studio" />
            </Helmet>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="animate__animated animate__fadeIn">
            <Logo />
           {/*  <Navbar /> */}
            <MenuOverlay/>

           

            <Link className="link" to="/copyright">
              ©2024 Coevo Studio
            </Link>

            <Experience />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
