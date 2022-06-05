import { useState, createContext } from "react";
import { useLocalStorage } from "../Components/Login/useLocalStorage";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [details, setDetails] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });
  const [userName, setUser] = useLocalStorage("userName", "");
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
    let u = localStorage.getItem("userName");
    let parsedUser = JSON.parse(u);
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
      } else {
        return "No User";
      }
    }
  };

  const setLogout = () => {
    setDetails({ id:"" , name: "", email: "", password: "" });
    setUser("");
    setIsLoggedIn(false);
    setAdmin(false);
    // localStorage.setItem("UserCart", JSON.stringify([]));
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
        setLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
