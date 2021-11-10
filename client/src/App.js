import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Posts from "./components/Posts";
import Register from "./components/Register";
import Login from "./components/Login";

function App(props) {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/Posts" component={Posts} />
          <Route path="/Register" component={Register} />
          <Route path="/Login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
