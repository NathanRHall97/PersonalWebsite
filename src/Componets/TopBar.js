import React, { useState } from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ProfilePic from '../ProfilePic.jpg';
import './Languages.css';

class TopBar extends React.Component{
    constructor(props)
    {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: true
        };
    }

    toggle() 
    {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render()
    {
        return (
            <Navbar color = "dark" expand = "md">
            <Container>
                        <div class="name_header">
                            <h3>Nathan R. Hall</h3>
                        </div>
            </Container>
            </Navbar>

        )
    }
}

export default TopBar;