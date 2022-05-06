import React from "react";
import { useState, useEffect } from "react";

function LoginForm({ setIsOpen }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    isLoggedIn: false,
  });
  const [user, setUser] = useState();
  const [error, setError] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const submitHandler = async (e) => {
    if (details.isLoggedIn === false) {
      e.preventDefault();
    }
  };

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
      setUser(body[0].name);
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

  if (user) {
    return <div>{user.name}</div>;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          <button onClick={togglePassword}>Show Password</button>
        </div>
        <input
          type="submit"
          name="submit"
          id="submit"
          onClick={onLogin}
          value="Login"
        />
      </div>
    </form>
  );
}

export default LoginForm;
