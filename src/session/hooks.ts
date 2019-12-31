import React from "react";

import SessionContext from "./context";
import { IState, IContext } from "./types";

export function useUser(): IState["user"] {
  const {
    state: { user },
  } = React.useContext<IContext>(SessionContext);

  return user;
}
