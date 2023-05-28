import { motion } from 'framer-motion'
import React from 'react'
import styled from "styled-components"
import '../css/style.css'

const TeamDiv = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 width: 100%;
 align-items: center;
 justify-items: center;

 .team-photo{
margin-bottom: 50px;
width: 70%;
 }

 .team-name{
  padding-top: 15px;
  color: white;
 }

 .team-description{
  padding-top: 15px;
 }

 .a{
    color:white;
    cursor: pointer;
    
 }

 @media screen and (max-width: 64em) {
    grid-template-columns: 1fr;
  }

 @media screen and (max-width: 40em){
  grid-template-columns: 1fr;


 .team-description{
  font-size: 13px;
 }
 .a{
  font-size: 15px;
 }
 }
 
`

const IMG = styled.img`
width: 400px;
height: 400px;
object-fit: cover;

@media screen and (max-width: 40em){
  width: 250px;
height: 250px;
}


`
const Title = styled.h3`
 font-family: 'Syncopate', sans-serif;
text-transform:uppercase;
padding: 3rem 5rem;

@media screen and (max-width: 48em){
font-size: 10px;
}
`

const Button = styled.button`
color: whitesmoke;
margin-top: 15px;
padding: 5px 20px 5px 20px;
background-color: #1e9c52;
border: none;
`


const Team = () => {
  return (
   <>
   <motion.div 
    initial={{ y: 200, opacity:0}}
    animate={{ y: 0, opacity:1}}
    transition={{ delay: 0.1 , ease: "circOut",
    duration: 1} 
 }
  >
    <Title><h3>Team</h3></Title>
    
    <TeamDiv>
  
          <div className="team-photo" > 
          <IMG src="/assets/deimovAI.jpg" alt="" />
          <a  className='a' href="https://www.instagram.com/deimovvv/" target="_blank">
          <h3  className="team-name" >Deimov</h3>
              </a> 
              <p  className="team-description"  >  Co-founder / Creative Director / Creative Coding / Sound Design / VFX / Media Artist  </p>
              <a className='a' href="https://www.instagram.com/deimovvv/" target="_blank">  <Button>  - </Button> </a>
            
          </div>
          <div className="team-photo">
          <IMG src="/team/divinaglitch.jpg" alt="" />
           <a  className='a' href="https://www.instagram.com/divina.glitch/"  target="_blank">
            <h3  className="team-name" >Divina glitch</h3>
           </a>
          <p  className="team-description"  >  Co-founder | Creative Director | Cinematic  | CGI</p>
             
          </div>
          <div className="team-photo">
          <IMG src="/team/keyla.jpg" alt="" />
          <a className='a' href="https://www.instagram.com/keyla___000/"  target="_blank"> <h3  className="team-name" >Keyla</h3>
          </a>
          <p  className="team-description"  >  Digital Fashion |  Art Director | Creative Coding  </p>
        
             
          </div>
          <div className="team-photo">
          <IMG src="/team/juno.png" alt="" />
          <a className='a' href="https://www.linkedin.com/in/juno-nedic-3022031b8/"  target="_blank"> <h3  className="team-name" >Juno </h3>
          </a> 
          <p  className="team-description"  >  Sound Desing | Inmersive Audio | Creative Coding | Generative AI | Media Artist </p>
              
          </div>
        </TeamDiv>
        </motion.div>
   </>
  )
}

export default Team