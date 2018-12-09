import React, { Component } from "react"
import Login from "./Login"
import Welcome from "../Welcome"



class IsAuth extends Component {
  activeUser() {
    return sessionStorage.getItem("credentials")
  }

  render() {
    return <React.Fragment>
        {this.props.isAuthenticated() ? (
        <Welcome activeUser={this.activeUser} {...this.props} />
        ) : (
          <Login {...this.props} />
        )}
      </React.Fragment>
  }
}

export default IsAuth