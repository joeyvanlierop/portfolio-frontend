import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Background from "./Background";
import Home from "./Home";
import Navbar, { NavbarLink } from "./Navbar";
import Calgary from "./Calgary";

function NavRoute({ exact, path, component: Component }) {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <div>
          <Background>
            <Navbar id={"top-navbar"}>
              <NavbarLink to="/">Home</NavbarLink>
              <NavbarLink to="/blog">Blog</NavbarLink>
              <NavbarLink to="/notes">Notes</NavbarLink>
            </Navbar>
            <Component {...props} />
          </Background>
        </div>
      )}
    />
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <NavRoute path={"/"} exact component={Home} />
        <NavRoute path={"/blog"} />
        <NavRoute path={"/notes"} />
        <Route path={"/calgary"} component={Calgary} />
      </Switch>
    </Router>
  );
}

export default App;
