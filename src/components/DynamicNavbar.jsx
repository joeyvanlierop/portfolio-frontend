import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

export class DynamicNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.handleScroll();
    });
  }

  handleScroll() {
    const { isScrolled } = this.state;

    if (window.pageYOffset > 10 && !isScrolled) {
      this.setState({
        isScrolled: true,
      });
    } else if (window.pageYOffset <= 10 && isScrolled) {
      this.setState({
        isScrolled: false,
      });
    }
  }

  render() {
    const { className } = this.props;
    const { isScrolled } = this.state;

    return (
      <Navbar
        className={(className || "") + `${isScrolled ? "" : " flat"}`}
        {...this.props}
      />
    );
  }
}

export default DynamicNavbar;
