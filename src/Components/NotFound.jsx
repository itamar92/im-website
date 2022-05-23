import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ padding: "120px", fontSize: "30px" }}>
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to home page </Link>
    </div>
  );
};

export default NotFound;
