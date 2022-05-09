import React from "react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

function LoginForm({ setIsOpen }) {
  const { details, setDetails } = useContext(UserContext);
  const { error, setError } = useContext(UserContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { userName, setUser } = useContext(UserContext);
  const { login } = useContext(UserContext);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const submitHandler = async (e) => {
    if (isLoggedIn === false) {
      e.preventDefault();
    }
  };

  const onLogin = async () => {
    const body = await login(details.email, details.password);

    if (body.length === 1) {
      setDetails({
        name: body[0].name,
        email: body[0].email,
        password: body[0].password,
      });
      console.log(body[0]);
      setIsLoggedIn(true);
      setUser(body[0].name);
      setIsOpen(false);
      console.log(details.name);
    } else {
      console.log("Details not match!");
      setError("Details not match!");
    }
  };

  const onLogout = () => {
    setDetails({ name: "", email: "", password: "" });
    setUser("");
    setIsLoggedIn(false);
    setIsOpen(false);
  };

  console.log("UserName:", userName);
  if (isLoggedIn)
    return (
      <form>
        <div className="form-inner">
          <h2>Logout?</h2>
          <input
            type="submit"
            name="submit"
            id="submit"
            onClick={onLogout}
            value="Logout"
          />
        </div>
      </form>
    );
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
            required
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
            required
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
