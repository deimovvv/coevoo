import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  margin: 0;
  padding: 0;
  top: 32px;
  left: 38px;

  @media screen and (max-width: 30em) {
    top: 32px;
    left: 14px;
  }
`;
const IMG = styled.img`
  width: 45px;
  height: 35px;

  @media screen and (max-width: 40em) {
    width: 35px;
    height: 25px;
  }
`;

const logo = () => {
  return (
    <Container>
      <Link to="/">
        {" "}
        <IMG src="/assets/logoPequeño.png" />{" "}
      </Link>
    </Container>
  );
};

export default logo;
