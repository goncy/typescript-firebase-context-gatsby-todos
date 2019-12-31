import React from "react";

import TodoContext from "./context";
import { IContext, IActions, IState } from "./types";

export function useTodos(): IState["todos"] {
  const {
    state: { todos },
  } = React.useContext<IContext>(TodoContext);

  return todos;
}

export function useTodoActions(): IActions {
  const { actions } = React.useContext<IContext>(TodoContext);

  return actions;
}
