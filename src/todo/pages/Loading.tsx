import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const LoadingPage = () => (
  <Container>
    <span>Loading todos...</span>
  </Container>
);

export default LoadingPage;
