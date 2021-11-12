import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditPost({ setPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const token = localStorage.getItem("token");
  const { id } = useParams();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`/api/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        content,
        tags,
      }),
    });
    const editPost = await response.json();
    const response2 = await fetch(`/api/posts/${id}`);
    const post = await response2.json();
    setPost(post);
    console.log(editPost);
  }

  return (
    <div>
      <h1>Edit Post</h1>
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
        <button type="submit">Edit Post!</button>
      </form>
    </div>
  );
}

export default EditPost;
