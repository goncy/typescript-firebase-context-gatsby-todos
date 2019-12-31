export interface ITodo {
  id: string;
  text: string;
  status: "pending" | "completed";
}

export interface IState {
  todos: ITodo[];
}

export interface IActions {
  add: (text: ITodo["text"]) => void;
  update: (todo: ITodo) => void;
  remove: (id: ITodo["id"]) => void;
}

export interface IContext {
  state: IState;
  actions: IActions;
}
