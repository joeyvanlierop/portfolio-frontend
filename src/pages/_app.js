import "normalize.css";
import AppTheme from "../components/AppTheme";
import Background from "../components/Background";
import Navbar, { NavbarLink } from "../components/Navbar";
import GlobalStyle from "../components/GlobalStyle";
import { Fragment } from "react";

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
