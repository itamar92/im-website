import React from "react";
import { useState, useEffect } from "react";
import LoginForm from "../Login/LoginForm";
import "./login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    isLoggedIn: false,
  });
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const history = useHistory;

  const onLogin = async () => {
    var response = await fetch(
      `http://localhost:5000/users?email=${details.email}&password=${details.password}`,
      { method: "GET" }
    );

    var body = await response.json();

    if (body.length == 1) {
      setDetails({
        name: body[0].name,
        email: body[0].email,
        password: body[0].password,
        isLoggedIn: true,
      });
      setUser(body.name);
      localStorage.setItem("user", body);
      console.log(body);
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

  if (user) {
    return <div>{user.name}</div>;
  }

  return (
    <div className="login">
      {details.isLoggedIn ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{details.name}</span>
          </h2>

          <button>{<Link to="/">Home</Link>}</button>
        </div>
      ) : (
        <LoginForm Login={onLogin} error={error} />
      )}
    </div>
  );
}

export default Login;
