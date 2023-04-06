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
  margin-bottom: 20px;
 }

 .team-description{
  padding-top: 15px;
 }

 .a{
    color: black !important;
    
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


const Team = () => {
  return (
   <>
    <Title><h3>Team</h3></Title>
    <TeamDiv>
  
          <div className="team-photo" > 
          <IMG src="/assets/deimovAI.jpg" alt="" />
              <p  className="team-description"  >  Co-founder / Creative Director / Creative Coding / Sound Design / VFX  </p>
              <h3  className="team-name" > <a  className='a' href="https://www.instagram.com/deimovvv/" target="_blank"> Deimov </a> </h3>
          </div>
          <div className="team-photo">
          <IMG src="/team/divinaglitch.jpg" alt="" />
          <p  className="team-description"  >  Co-founder / Creative Director / Cinematic / CGI  </p>
              <h3  className="team-name" >  <a  className='a' href="https://www.instagram.com/divina.glitch/"  target="_blank">  Divina glitch  </a></h3>
          </div>
          <div className="team-photo">
          <IMG src="/team/keyla.jpg" alt="" />
          <p  className="team-description"  >  Digital Fashion / Art Director / Creative Coding  </p>
              <h3  className="team-name" >  <a className='a' href="https://www.instagram.com/keyla___000/"  target="_blank">  Keyla </a>  </h3>
          </div>
        </TeamDiv>
   </>
  )
}

export default Team