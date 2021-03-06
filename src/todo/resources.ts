import firebase from "../firebase";
import { IUser } from "../session";

import { ITodo } from "./types";

export default {
  add: (user: IUser["uid"], todo: Partial<ITodo>) =>
    firebase.database
      .collection("users")
      .doc(user)
      .collection("todos")
      .add(todo),
  update: (user: IUser["uid"], todo: ITodo) =>
    firebase.database
      .collection("users")
      .doc(user)
      .collection("todos")
      .doc(todo.id)
      .update(todo),
  remove: (user: IUser["uid"], id: ITodo["id"]) =>
    firebase.database
      .collection("users")
      .doc(user)
      .collection("todos")
      .doc(id)
      .delete(),
  onChange: (user: IUser["uid"], callback: (todos: ITodo[]) => void) =>
    firebase.database
      .collection("users")
      .doc(user)
      .collection("todos")
      .onSnapshot(snapshot => callback(snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as ITodo) })))),
};
