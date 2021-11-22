import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function CreatePost({ userId, setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const token = localStorage.getItem("token");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        authorId: userId,
        title,
        content,
        tags,
      }),
    });
    const addPost = await response.json();
    const response2 = await fetch(`/api/posts`);
    const parsedResponse = await response2.json();
    setPosts(parsedResponse.posts);
    const id = addPost.post.id;
    history.push(`Posts/${id}`);
  }

  return (
    <div>
      <h1>Create a Post!</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(title);
          }}
        />
        <input
          value={content}
          placeholder="content"
          onChange={(e) => {
            setContent(e.target.value);
            console.log(content);
          }}
        />
        <input
          value={tags}
          placeholder="tags"
          onChange={(e) => {
            setTags(e.target.value);
            console.log(tags);
          }}
        />
        <button type="submit">Add Post!</button>
      </form>
    </div>
  );
}

export default CreatePost;
