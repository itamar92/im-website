import { useState, useEffect, createContext } from "react";

export const UserContext1 = createContext({});

function UserProvider({ children }) {
  const { userName, setUser } = useState("");

  return (
    <UserContext1.Provider value={{ userName, isLoggedIn }}>
      {children}
    </UserContext1.Provider>
  );
}

export default UserContext1;
