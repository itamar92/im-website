import { useState, useEffect, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    isLoggedIn: false,
  });
  const [user, setUser] = useState();
  const [error, setError] = useState("");

  const onLogin = async () => {
    var response = await fetch(
      `http://localhost:5000/users?email=${details.email}&password=${details.password}`,
      { method: "GET" }
    );

    var body = await response.json();
    console.log(body);
    console.log(body.length);

    if (body.length === 1) {
      setDetails({
        name: body[0].name,
        email: body[0].email,
        password: body[0].password,
        isLoggedIn: true,
      });
      setUser(body[0]);
      setIsOpen(false);
      console.log(user);
    } else {
      console.log("Details not match!");
      setError("Details not match!");
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return <UserContext.Provider>{children}</UserContext.Provider>;
}

export default UserContext;
