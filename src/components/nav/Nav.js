import React, { Component } from 'react'
import { Link } from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import "./Nav.css"
export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout = () => {
    sessionStorage.clear().then(() => window.reload)
  };


  render() {

    return (
      <div>
        <Navbar id="navBar" light expand="md">
        <Link id="navTitle" to={`/`}>VIRTUAL AGENT</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link id="navVenues" to={`/venues/`}>VENUES</Link>
              </NavItem>
              <NavItem>
                <Link id="navVenues" to={`/tours/`}>TOUR</Link>
              </NavItem>

              <NavItem>

                <Link to={'/'} id="navLogout" onClick={this.logout}>LOG OUT</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}