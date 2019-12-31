import React from "react";

import { Provider as SessionProvider } from "../session";
import { Provider as TodoProvider } from "../todo";

import "./theme.css";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const App = ({ children }: Props) => (
  <SessionProvider>
    <TodoProvider>{children}</TodoProvider>
  </SessionProvider>
);

export default App;
