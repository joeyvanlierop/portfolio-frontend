import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Background from "./Background";
import Home from "./Home";
import Navbar, { NavbarLink } from "./Navbar";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Background>
        <Navbar id={"top-navbar"}>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/blog">Blog</NavbarLink>
          <NavbarLink to="/notes">Notes</NavbarLink>
        </Navbar>
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/blog"} />
          <Route path={"/notes"} />
        </Switch>
      </Background>
    </Router>
  );
}

export default App;
