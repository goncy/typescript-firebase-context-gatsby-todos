import React from "react";
import styled from "styled-components";

import SEO from "../../ui/meta/Seo";

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
    <SEO title="Loading..." />
    <span>Loading window...</span>
  </Container>
);

export default LoadingPage;
