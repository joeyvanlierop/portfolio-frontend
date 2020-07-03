import "normalize.css";
import React, { Fragment } from "react";
import AppTheme from "../components/AppTheme";
import GlobalStyle from "../components/GlobalStyle";
import Navbar, { NavLink } from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle />
      <AppTheme>
        <Navbar id={"top-navbar"}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/notes">Notes</NavLink>
        </Navbar>
        <Component {...pageProps} />
      </AppTheme>
    </Fragment>
  );
}
