import React from "react";

function CreatePost(props) {
  return (
    <div>
      <h1>Create a Post!</h1>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}

export default CreatePost;
