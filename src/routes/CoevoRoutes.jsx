import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Collaborations from '../pages/Collaborations';
import AboutUs from '../pages/AboutUs';
import Project from '../pages/Project';
import Loader from '../components/Loader';


const CollabRoutes = () => {

 

  return (
    <>
     {/*  <Navbar/> */}
     <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/collaborations" element={<Collaborations/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
       
        <Route path="/project/:id" element={<Project />} />
        

      </Routes>
      
    </>
  )
}

export default CollabRoutes
