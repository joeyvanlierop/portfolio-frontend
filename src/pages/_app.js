import "normalize.css";
import React, { Fragment } from "react";
import AppTheme from "../components/AppTheme";
import Background from "../components/Background";
import GlobalStyle from "../components/GlobalStyle";
import Navbar, { NavbarLink } from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle />
      <AppTheme>
        <Background>
          <Navbar id={"top-navbar"}>
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/blog">Blog</NavbarLink>
            <NavbarLink href="/notes">Notes</NavbarLink>
          </Navbar>
          <Component {...pageProps} />
        </Background>
      </AppTheme>
    </Fragment>
  );
}
