import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* Asegúrate de que el logo esté por encima de otros elementos */
`;

const IMG = styled.img`
  width: 130px;
  margin-top: 24px;
  margin-left: 20px;
`;

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <IMG src="/assets/isocoevo.png" alt="Logo" />
      </Link>
    </Container>
  );
};

export default Logo;