import React, { useState, useEffect } from "react";

function Posts(props) {
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

  const postsToRender = posts.map((post) => {
    return (
      <>
        <div>
          {post.author ? <h1>Username: {post.author.username}</h1> : null}
          <h2>Title: {post.title}</h2>
          <p>Content: {post.content}</p>
          {post.tags.length ? <p>Tags: yes</p> : <p>Tags: no</p>}
        </div>
      </>
    );
  });

  return (
    <div>
      <h1>Posts</h1>
      {postsToRender}
    </div>
  );
}

export default Posts;
