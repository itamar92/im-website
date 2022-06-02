import { useState, createContext, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [details, setDetails] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });
  const [userName, setUser] = useLocalStorage("user", "");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("login", false);

  const [isAdmin, setAdmin] = useLocalStorage("admin", false);

  const auth = async (email, password) => {
    var response = await fetch(
      `http://localhost:5000/users?email=${email}&password=${password}`,
      { method: "GET" }
    );
    return await response.json();
  };

  const fetchUser = async (name) => {
    var response = await fetch(` http://localhost:5000/users?name=${name}`, {
      method: "GET",
    });
    return await response.json();
  };

  const setLoggedInUser = async () => {
    let u = localStorage.getItem("user");
    let parsedUser = JSON.parse(u);
    console.log(parsedUser);
    if (parsedUser === "") {
      return "No User";
    } else {
      const body = await fetchUser(parsedUser);

      if (body.length === 1) {
        setDetails({
          id: body[0].id,
          name: body[0].name,
          email: body[0].email,
          password: body[0].password,
        });
        // console.log("details: ", details);
      } else {
        return "No User";
      }
    }
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
        auth,
        isAdmin,
        setAdmin,
        fetchUser,
        setLoggedInUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
