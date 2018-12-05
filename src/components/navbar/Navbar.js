import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
export default class Example extends React.Component {
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
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Virtual Agent</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/venues/">Venues</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tours/">Tours</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/log in/">Log In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

{
  /* <UncontrolledDropdown nav inNavbar>
<DropdownToggle nav caret>
  Options
</DropdownToggle>
<DropdownMenu right>
  <DropdownItem>
    Option 1
  </DropdownItem>
  <DropdownItem>
    Option 2
  </DropdownItem>
  <DropdownItem divider />
  <DropdownItem>
    Reset
  </DropdownItem>
</DropdownMenu>
</UncontrolledDropdown> */
}
