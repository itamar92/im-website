import React, { useContext, useState } from "react";
import { auth } from "./firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);

  function login(email, password) {
    return auth.creatUserWithEmailAndPassword(email, password);
  }
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const value = { currentUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
