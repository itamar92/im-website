import { Link } from "react-router-dom";

const ProtectedRoute = ({
  isLoggedIn,
  isAdmin,
  redirectPath = "/#header",
  children,
}) => {
  if (!isLoggedIn || !isAdmin) {
    return <Link to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
