import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import AlertDialog from "../AlertDialog";

function LoginForm({ setIsOpen }) {
  const { details, setDetails } = useContext(UserContext);
  const { error, setError } = useContext(UserContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { userName, setUser } = useContext(UserContext);
  const { auth, setLogout } = useContext(UserContext);
  const { isAdmin, setAdmin } = useContext(UserContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const [isDialogOpen, seIsDialog] = useState(true);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const submitHandler = async (e) => {
    if (isLoggedIn === false) {
      e.preventDefault();
    } else setUser(details.name);
  };

  const onLogin = async () => {
    const body = await auth(details.email, details.password);

    if (body.length === 1) {
      setDetails({
        name: body[0].name,
        email: body[0].email,
        password: body[0].password,
      });
      setIsLoggedIn(true);
      setUser(body[0].name);
      setIsOpen(false);
      if (body[0].role === "admin") setAdmin(true);
    } else {
      setError("Details not match!");
    }
  };



  const DialogClose = () => {
    seIsDialog(false);
    setIsOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(userName));
    localStorage.setItem("admin", JSON.stringify(isAdmin));
  }, [userName]);

  let localUser = localStorage.getItem("userName");
  if (localUser === "") setIsLoggedIn(false);

  const LogoutText = "Are you sure you want to Logout?";

  if (isLoggedIn)
    return (
      <AlertDialog
        open={isDialogOpen}
        setClose={DialogClose}
        text={LogoutText}
        handleOperation={setLogout}
      />
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
            maxLength={24}
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
            maxLength={15}
            required
          />
          <button className="btn__psw" onClick={togglePassword}>
            Show Password
          </button>
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
