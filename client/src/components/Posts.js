import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreatePost from "./CreatePost";

function Posts({ userId, isLoggedIn }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(`/api/posts`);
      const parsedResponse = await response.json();
      setPosts(parsedResponse.posts);
    };

    getPosts();
  }, []);

  console.log(posts);
  console.log(userId);

  const postsToRender = posts.map((post) => {
    return (
      <>
        <div className="post">
          {post.author ? <h1>Username: {post.author.username}</h1> : null}
          <h2>Title: {post.title}</h2>
          <p>Content: {post.content}</p>
          {post.tags.length ? <p>Tags: yes</p> : <p>Tags: no</p>}
          <Link to={`/Posts/${post.id}`}>Click here for single post</Link>
        </div>
      </>
    );
  });

  return (
    <div>
      {isLoggedIn ? <CreatePost userId={userId} setPosts={setPosts} /> : null}
      <h1>Posts</h1>
      {postsToRender}
    </div>
  );
}

export default Posts;
