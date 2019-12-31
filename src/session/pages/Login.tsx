import React from "react";
import styled from "styled-components";

import Button from "../../ui/controls/Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const LoginPage = ({ login, status }) => (
  <Container>
    {status === "init" && <span>Tratando de restaurar sesión...</span>}
    {status === "restored" && <Button onClick={login}>Login with Google</Button>}
  </Container>
);

export default LoginPage;
