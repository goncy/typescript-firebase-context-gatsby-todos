import React from "react";

import { IUser, IContext, IState, IActions } from "./types";
import auth from "./resources";
import Login from "./pages/Login";

const SessionContext = React.createContext({} as IContext);

const SessionProvider = ({ children }) => {
  const [user, setUser] = React.useState<IUser>(null);
  const [status, setStatus] = React.useState<"init" | "restored">("init");

  const state: IState = { user };
  const actions: IActions = { signOut: auth.signOut, signIn: auth.signIn };

  React.useEffect(
    () =>
      auth.onChange(user => {
        setUser(user);

        setStatus("restored");
      }),
    []
  );

  if (!user) return <Login login={actions.signIn} status={status} />;

  return <SessionContext.Provider value={{ state, actions }}>{children}</SessionContext.Provider>;
};

export { SessionProvider as Provider, SessionContext as default };
