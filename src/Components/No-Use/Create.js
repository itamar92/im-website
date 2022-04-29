import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);

    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      //history.go(-1);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2> Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <lable> Blog title:</lable>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <lable> Blog body:</lable>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        >
          {" "}
        </textarea>
        <lable> Blog author:</lable>
        <select value={body} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button> Add Blog</button>}
        {isPending && <button disabled>Adding Blog.. </button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
