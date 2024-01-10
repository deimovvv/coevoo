import React from 'react'
import styled from "styled-components";

const DescripcionContainer = styled.div`
  color: white;
  padding-top: 50px;
  height: 400px;
  width: 500px;
  grid-column: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
padding-bottom: 10px;
`

const ImagenContainer = styled.div`
  grid-column: 1;
  
`;

const IMG = styled.img`
  width: 600px;
  height: 400px;
`;



const ServicesCard = ({id, title, description}) => {

  const servicesURL = `assets/serviciosImagenes/${id}.jpg`;

  return (
      <>

<ImagenContainer>
<IMG src={servicesURL}  alt="" />
</ImagenContainer>


<DescripcionContainer>
<Title> {title} </Title>
<p>
{description} 
</p>
</DescripcionContainer>

</>
  )
}

export default ServicesCard