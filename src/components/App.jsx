import React from "react";
import Home from "./Home";
import Navbar, { NavbarLink } from "./Navbar";
import Background from "./Background";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Background>
        <Navbar id={"top-navbar"}>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/blog">Blog</NavbarLink>
          <NavbarLink to="/notes">Notes</NavbarLink>
        </Navbar>
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
          <Route path={process.env.PUBLIC_URL + "/home"} exact />
          <Route path={process.env.PUBLIC_URL + "/blog"} exact />
        </Switch>
      </Background>
    </Router>
  );
}

export default App;
