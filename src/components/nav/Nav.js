import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Navbar, Nav, NavItem, } from "reactstrap";
import "./Nav.css"
export default class NavBar extends Component {

  // clears session storage, then reloads window to complete logout 

  logout = () => {
    sessionStorage.clear().then(() => window.reload)
  };


  render() {

    return (
      <div>
        <Navbar id="navBar" light expand="md">
        <Link id="navTitle" to={`/`}>VIRTUAL AGENT</Link>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link id="navVenues" to={`/venues/`}>VENUES</Link>
              </NavItem>
              <NavItem>
                <Link id="navVenues" to={`/tours/`}>TOUR</Link>
              </NavItem>

              <NavItem>

                {/* calls log out function and links to home page */}

                <Link to={'/'} id="navLogout" onClick={this.logout}>LOG OUT</Link>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}