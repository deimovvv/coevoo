import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 999999;
  margin: 0;
  padding: 0;
  /* top: 32px;
  left: 38px; */
  top: 25px;
  left: 35px;

  display: block;

  @media screen and (max-width: 30em) {
    left: 14px;
    top: 14px;

  }
`;
const IMG = styled.img`
  /* width: 45px;
  height: 36px; */
  width: 62px;
    height: 62px;

  @media screen and (max-width: 40em) {
   /*  width: 35px;
    height: 25px; */
    width: 50px;
    height: 50px;
    top: 1px;
    

  }
  @media screen and (max-width: 64em) {
   /*  width: 35px;
    height: 25px; */
    width: 50px;
    height: 50px;
    top: 1px;
    

  }
`;

const logo = () => {
  return (
    <Container>
      <Link to="/">
        {" "}
        <IMG src="/assets/Logo33.png" />{" "}
      </Link>
    </Container>
  );
};

export default logo;
