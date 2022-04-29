import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;

  console.log(props.blogs);
  return (
    <div className="blog-preview">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p> written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
