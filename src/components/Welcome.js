import React, { Component } from "react"
import NavBar from "./nav/Nav"
import ApplicationViews from "./ApplicationViews";

export default class Welcome extends Component {
  render() {
    return <React.Fragment>
        <NavBar {...this.props} />
        <ApplicationViews {...this.props} />
      </React.Fragment>
  }
}


// Welcome is doing what Agent.js was doing before but via authentication