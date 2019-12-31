import React from "react";

import { useUser } from "../session";

import { ITodo, IContext, IState, IActions } from "./types";
import api from "./resources";
import Loading from "./pages/Loading";

const TodoContext = React.createContext<IContext | null>(null);

const TodoProvider = ({ children }) => {
  const user = useUser();
  const [status, setStatus] = React.useState<"pending" | "resolved" | "rejected">("pending");
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  function add(text: ITodo["text"]) {
    api.add(user.uid, { text, status: "pending" });
  }

  function update(todo: ITodo) {
    api.update(user.uid, todo);
  }

  function remove(id: ITodo["id"]) {
    api.remove(user.uid, id);
  }

  const state: IState = { todos };
  const actions: IActions = { add, update, remove };

  React.useEffect(() => {
    api.onChange(user.uid, (todos: ITodo[]) => {
      setTodos(todos);

      setStatus("resolved");
    });

    return () => setStatus("pending");
  }, [user.uid]);

  if (status === "pending") return <Loading />;

  return <TodoContext.Provider value={{ state, actions }}>{children}</TodoContext.Provider>;
};

export { TodoContext as default, TodoProvider as Provider };
