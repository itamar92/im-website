import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function ProtectedRoute({ children, checkAdmin, ...rest }) {
  const { isLoggedIn, isAdmin } = useContext(UserContext);

  const redirect = (from, to) => {
    console.log(from, to);
    return <Redirect to={{ pathname: to, state: { from } }} />;
  };

  const handleAdmin = (location) => {
    return isAdmin ? children : redirect(location, "/");
  };
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isLoggedIn
          ? checkAdmin
            ? handleAdmin(location)
            : children
          : redirect(location, "/login-permission");
      }}
    />
  );
}

export default ProtectedRoute;
