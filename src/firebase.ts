import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

let instance = null;

function initialize() {
  if (typeof window === "undefined") return null;
  if (instance) return instance;

  instance = firebase.initializeApp({
    apiKey: process.env.GATSBY_API_KEY,
    authDomain: process.env.GATSBY_AUTH_DOMAIN,
    databaseURL: process.env.GATSBY_DATABASE_URL,
    projectId: process.env.GATSBY_PROJECT_ID,
    storageBucket: process.env.GATSBY_STORAGE_BUCKET,
    messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
    appId: process.env.GATSBY_APP_ID,
  });

  return instance;
}

export default new Proxy(
  {
    get database() {
      return firebase.firestore();
    },
    get auth() {
      return firebase.auth();
    },
    providers: {
      get google() {
        return new firebase.auth.GoogleAuthProvider();
      },
    },
  },
  {
    get: function(target, name) {
      initialize();

      return target[name];
    },
  }
);
