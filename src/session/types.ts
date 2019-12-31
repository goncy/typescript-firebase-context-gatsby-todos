import { User } from "firebase";

export interface IState {
  user: User;
}

export interface IActions {
  signIn: () => void;
  signOut: () => void;
}

export interface IContext {
  state: IState;
  actions: IActions;
}

export { User as IUser };
