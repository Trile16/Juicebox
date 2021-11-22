import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Posts from "./components/Posts";
import Register from "./components/Register";
import Login from "./components/Login";
import SinglePost from "./components/SinglePost";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getAuthenticate = async () => {
      try {
        const response = await fetch(`api/users/authenticate`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const authenticate = await response.json();
        console.log(authenticate);
        authenticate.success
          ? setUserId(authenticate.user.id)
          : console.log("not logged in");
      } catch (error) {
        throw error;
      }
    };

    getAuthenticate();
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div>
      <Router>
        <Nav setIsLoggedIn={setIsLoggedIn} />
        <Switch>
          <Route exact path="/Posts">
            <Posts isLoggedIn={isLoggedIn} userId={userId} />
          </Route>
          <Route path="/Register">
            <Register setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route path="/Login">
            <Login setIsLoggedIn={setIsLoggedIn} />
          </Route>
          {/* :id is a param (thats why u import in singlepost) */}
          <Route path="/Posts/:id">
            <SinglePost userId={userId} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
