import { useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import Portalpage from "./Portalpage";
import { UserContext } from "../../Context/UserContext";

const LoginPermission = () => {
  const { isLoggedIn,isAdmin } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useLocation();

  const history = useHistory();
  if (isLoggedIn) 
  {
    history.push(state.from.pathname);
    return <></>;
  }

  if(!isAdmin) 

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
