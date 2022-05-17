import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [userName, setUser] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  const login = async (email, password) => {
    var response = await fetch(
      `http://localhost:5000/users?email=${email}&password=${password}`,
      { method: "GET" }
    );

    return await response.json();
  };

  return (
    <UserContext.Provider
      value={{
        details,
        setDetails,
        error,
        setError,
        userName,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        login,
        isAdmin,
        setAdmin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
