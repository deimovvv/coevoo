import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../components/Home';
import Projects from '../pages/Projects';
import Services from '../pages/Services';
import AboutUs from '../pages/AboutUs';
import ProjectDetail from '../pages/ProjectDetail';
import Loader from '../components/Loader';
import { motion } from 'framer-motion';
import Installations from '../pages/Installations';
import Contact from '../pages/Contact';
import CopyRight from '../pages/Copyright';

import SidebarMenu from "../components/SidebarMenu";
import MouseFollower from "../components/UI/MouseFollower";
import Logo from "../components/Logo";



const CollabRoutes = () => {

  const location = useLocation();

  return (
    <>


     {/*  <Navbar/> */}
     <MouseFollower />
     <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
         {/* <Menu />  */}
         {/* <MenuOverlay />  */}
        
        {/*  <SidebarMenu/>
         <Logo /> */}
          <Suspense fallback={<Loader/>}>
     <Routes  location={location} >
      
        <Route exact path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        {/* <Route path="/services" element={<Services/>} /> */}
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/installations" element={<Installations />} />
        <Route path="/copyright" element={<CopyRight />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      </Suspense>

      </motion.div>
      
    </>
  )
}

export default CollabRoutes
