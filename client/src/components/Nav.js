import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function Nav({ setIsLoggedIn }) {
  const history = useHistory();

  const logout = () => {
    localStorage.clear("token");
    setIsLoggedIn(false);
    history.push("/Login");
  };

  return (
    <div>
      <nav>
        <ul>
          <span>
            <Link to="/Posts">Posts</Link>
          </span>
          <span>
            <Link to="/Register">Register</Link>
          </span>
          <span>
            {localStorage.length !== 0 ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <Link to="/Login">Login</Link>
            )}
          </span>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
