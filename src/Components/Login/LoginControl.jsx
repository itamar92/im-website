import { useState } from "react";

function LoginControl({ userName }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUserName] = useState("Sign In");

  const handleLoginClick = () => {
    setIsLoggedIn(true);
    setUserName(userName);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setUserName("Sign In");
  };

  let loginName;
  if (isLoggedIn) {
    loginName = <h3 onClick={handleLogoutClick}>Welcom {user}</h3>;
  } else {
    loginName = <h3 onClick={handleLoginClick}>{user}</h3>;
  }

  return <div>{loginName}</div>;
}

export default LoginControl;
