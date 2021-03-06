import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const parsedResponse = await response.json();
      console.log(parsedResponse);

      const token = parsedResponse.token;
      console.log(token);
      localStorage.setItem("token", token);
      parsedResponse.token
        ? (setIsLoggedIn(true), history.push("/Posts"))
        : null;
    } catch (error) {
      throw error;
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
