import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../usefetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch("/data/Products-db.json" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("/data/Products-db.json" + data.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleClick}> Delete </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
