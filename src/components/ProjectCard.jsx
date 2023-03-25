import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState  } from "react";

const Project = styled.div`
margin: 0%;
padding:0%;
/* height: 400px; */

`;

const IMG = styled.img`
  width: 440px;
  height: 440px;
  margin-top: 0%;




`;

const TitleContainer = styled.div`
width: 100%;
height: 100%;
top: 0;
left: 0;
position: absolute;
background: rgba(0,0,0,0.3);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
opacity: 0;
transition: 0.6s;

&:hover{
opacity: 1;
}

& > *{
  transform: translateY(25px);
  transition: transform 0.6s;
} 
&:hover > *{
transform: translateY(0px);
}

`;

const ImageContainer = styled.div`
position: relative;
height: 440px;
`

const H3 = styled.h3`
font-weight: 200;
    font-size: 1rem;
    color: white;
    position: absolute;
    bottom: 25px;

`

const ProjectCard = ({ id, title, publisher, date, description}) => {
  
  const projectURL = `src/assets/${id}.jpg`;



  return (
    <Project  className="animate__animated animate__fadeIn" >

      <ImageContainer>
        <Link 
          onClick={() => handleClick("project-section")}
        to={`/project/${id}`}>
          <IMG 
            src={projectURL}
             />
       

        <TitleContainer>
        {<H3> {description} </H3>}
        </TitleContainer>
        </Link>
      </ImageContainer>

      

    </Project>

  );
};

export default ProjectCard;
