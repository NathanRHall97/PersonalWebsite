import React from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import ProfilePic from '../ProfilePic.jpg';

class TopBar extends React.Component{
    constructor(props)
    {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {isOpen: false};
    }

    toggle()
    {
        this.setState({isOpen: !this.state.isOpen});
    }
    render()
    {
        return (
            <Navbar color = "dark" expand = "md">
            <Container>
                <NavbarBrand href="/">
                    <span>Nathan R. Hall</span>
                </NavbarBrand>
                <NavbarToggler onClick = {this.toggle}/>
            </Container>
            </Navbar>

        )
    }
}

export default TopBar;