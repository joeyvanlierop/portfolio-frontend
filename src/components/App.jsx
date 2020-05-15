import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar id={"top-navbar"}>
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link href="#">Blog</Navbar.Link>
        <Navbar.Link href="#">Notes</Navbar.Link>
      </Navbar>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
