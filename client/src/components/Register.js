import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Register({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    console.log("it clicks!");
    try {
      e.preventDefault();
      const response = await fetch(`/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          name,
          location,
        }),
      });
      const register = await response.json();
      console.log(register);
      const token = register.token;
      console.log(token);
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
      history.push("/Posts");
    } catch (error) {
      throw error;
    }
  }

  return (
    <div>
      <h1>Register Here!</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          placeholder="Choose a username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          value={password}
          placeholder="Choose a password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          value={name}
          placeholder="What is your name?"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          value={location}
          placeholder="Where are you located?"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <button type="submit">Register!</button>
      </form>
    </div>
  );
}

export default Register;
