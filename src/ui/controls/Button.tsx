import React from "react";
import styled from "styled-components";

interface Props {
  children: JSX.Element | string;
  onClick: (event: React.MouseEvent) => void;
}

const Container = styled.button`
  padding: 12px;
  border: none;
  background: transparent;
  color: var(--foreground);
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = ({ children, ...props }: Props) => <Container {...props}>{children}</Container>;

export default Button;
