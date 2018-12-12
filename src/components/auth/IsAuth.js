import React, { Component } from "react"
import Login from "./Login"
import Welcome from "../Welcome"



class IsAuth extends Component {
  
  render() {
    return <React.Fragment>
        {this.props.isAuthenticated ? (
        <Welcome {...this.props} />
        ) : (
          <Login {...this.props} />
        )}
      </React.Fragment>
  }
}

export default IsAuth