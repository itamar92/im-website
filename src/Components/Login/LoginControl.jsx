import { useState } from "react";

function LoginControl({ userName }) {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUserName] = useState("Sign In");

  const handleLoginClick = () => {
    setIsLoggedIn(true);
    setUserName(userName);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setUserName("Sign In");
  };

  let LoginName;
  if (IsLoggedIn) {
    LoginName = <h3 onClick={handleLogoutClick}>Welcom {user}</h3>;
  } else {
    LoginName = <h3 onClick={handleLoginClick}>{user}</h3>;
  }

  return <div>{LoginName}</div>;
}

export default LoginControl;
