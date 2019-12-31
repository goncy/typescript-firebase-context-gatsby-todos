import React from "react";
import styled from "styled-components";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 32px;
`;

const Layout = ({ children }: Props) => <Container>{children}</Container>;

export default Layout;
