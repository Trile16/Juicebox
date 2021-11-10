import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
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
            <Link to="/Login">Login</Link>
          </span>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
