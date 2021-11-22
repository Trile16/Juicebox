import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";

function SinglePost({ userId }) {
  const { id } = useParams();
  const [post, setPost] = useState({});
  console.log(id);
  console.log(userId);

  useEffect(() => {
    async function getPost() {
      const response = await fetch(`/api/posts/${id}`);
      const singlePost = await response.json();
      setPost(singlePost);
    }
    getPost();
  }, []);

  console.log(post);

  return (
    <div className="post">
      {post.author ? <h1>Username: {post.author.username}</h1> : null}
      <h2>Title: {post.title}</h2>
      <p>Content: {post.content}</p>
      {post.author ? (
        userId === post.author.id ? (
          <>
            <EditPost setPost={setPost} />
            <DeletePost />
          </>
        ) : null
      ) : null}
    </div>
  );
}

export default SinglePost;
