import React from "react";

import { Provider as SessionProvider } from "../session";
import { Provider as TodoProvider } from "../todo";

import Loading from "./pages/Loading";

import "./theme.css";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const App = ({ children }: Props) => {
  if (typeof window === "undefined") return <Loading />;

  return (
    <SessionProvider>
      <TodoProvider>{children}</TodoProvider>
    </SessionProvider>
  );
};

export default App;
