import firebase from "firebase";

export interface IState {
  user: firebase.User;
}

export interface IActions {
  signIn: () => void;
  signOut: () => void;
}

export interface IContext {
  state: IState;
  actions: IActions;
}

export type IUser = firebase.User;
