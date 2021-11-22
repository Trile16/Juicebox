import React from "react";
import { useParams, useHistory } from "react-router-dom";

function DeletePost(props) {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      history.push("/Posts");
    } catch (error) {
      throw error;
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Delete Post!</button>
      </form>
    </div>
  );
}

export default DeletePost;
