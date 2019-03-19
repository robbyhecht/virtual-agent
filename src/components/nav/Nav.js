import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import "./Nav.css"
export default class NavBar extends Component {

    constructor(props) {
      super(props);
  
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true
      };
    }
  
    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }

  // clears session storage, then reloads window to complete logout 

  logout = () => {
    sessionStorage.clear().then(() => window.reload)
  };


  render() {

    return (
      <div>
        <Navbar id="navBar" light expand="md">
        <Link className="navLink" id="navTitle" to={`/`}>VIRTUAL AGENT</Link>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="navLink" to={`/venues/`}>VENUES</Link>
              </NavItem>
              <NavItem>
                <Link className="navLink" to={`/tour/`}>TOUR</Link>
              </NavItem>

              <NavItem>

                {/* calls log out function and links to home page */}

                <Link to={'/'} className="navLink" id="navLogout" onClick={this.logout}>LOG OUT</Link>
              </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}