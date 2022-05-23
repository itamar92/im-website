import { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import Portalpage from "./Portalpage";
import { UserContext } from "./UserContext";

const LoginPermission = () => {
  const { isLoggedin } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useLocation();

  const history = useHistory();

  if (isLoggedin) return history.push("/");

  return (
    <div style={{ padding: "120px", fontSize: "30px" }}>
      <h2>Sorry</h2>
      <p>You need to Sign in first</p>

      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Sign in
      </button>

      <Portalpage open={isOpen} onClose={() => setIsOpen(false)}>
        {<LoginForm setIsOpen={setIsOpen} />}
      </Portalpage>
    </div>
  );
};

export default LoginPermission;
