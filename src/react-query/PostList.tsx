import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const [userID, setUser] = useState<number>();
  const { data, error, isLoading } = usePosts(userID);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        className="form-select mb-3"
        onChange={(event) => setUser(parseInt(event.target.value))}
        value={userID}
      >
        <option value="">All Posts</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {data?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
