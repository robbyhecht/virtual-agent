import React, { Component } from "react"
import NavBar from "./nav/Nav"
import ApplicationViews from "./ApplicationViews";
export default class Welcome extends Component {

  // Once user logs in, this page becomes the hub of passing information up to the dom and passing props down to the navbar and application views components.

  render() {
    return <React.Fragment>
        <NavBar {...this.props} />
        <ApplicationViews {...this.props} />
      </React.Fragment>
  }
}