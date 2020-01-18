import firebase from "../firebase";

import { IUser } from "./types";

export default {
  signIn: () => firebase.auth.signInWithPopup(firebase.providers.google),
  signOut: () => firebase.auth.signOut(),
  onChange: (callback: (user: IUser) => void) => firebase.auth.onAuthStateChanged(callback),
};
