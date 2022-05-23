import { Link } from "react-router-dom";
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "./Login/UserContext";

function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useContext(UserContext);
  console.log(isLoggedIn);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isLoggedIn === true ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/loginpermission", state: { from: location } }}
          />
        );
      }}
    />
  );
}

export default ProtectedRoute;
