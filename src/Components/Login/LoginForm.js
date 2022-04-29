import React from "react";
import { useState } from "react";

function LoginForm({ setIsOpen }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    isLoggedIn: false,
  });
  const [error, setError] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const submitHandler = (e) => {
    if (details.isLoggedIn == false) {
      e.preventDefault();
    }
  };

  const onLogin = async () => {
    console.log(details.name, details.email, details.password);

    var response = await fetch(
      `public/usersList.json=${details.email}&password=${details.password}`,
      { method: "GET" }
    );

    var body = await response.json();
    console.log(body);

    if (body.length == 1) {
      console.log("Logged in");
      console.log(body[0].name);
      setDetails({
        name: body[0].name,
        email: body[0].email,
        password: body[0].password,
        isLoggedIn: true,
      });
      setIsOpen(false);
    } else {
      console.log("Details not match!");
      setError("Details not match!");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
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
