import React, { Component } from 'react'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export class DynamicNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isScrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { isScrolled } = this.state;

        if (window.pageYOffset > 10 && !isScrolled) {
            this.setState({
                isScrolled: true
            })
        } else if (window.pageYOffset <= 10 && isScrolled) {
            this.setState({
                isScrolled: false
            })
        }
    }

    render() {
        const { className, ...props } = this.props
        const { isScrolled } = this.state

        return (
            <Navbar className={className + `${isScrolled ? "" : " flat"}`} {...props} />
        );
    }
}

export default DynamicNavbar
