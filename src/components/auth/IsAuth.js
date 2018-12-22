import React, { Component } from "react"
import Login from "./Login"
import Welcome from "../Welcome"



class IsAuth extends Component {

  // Dictated by ternary- if Authentication is successful, props are passed to the Welcome component. If unsuccessful, props are passed to the Login component.
  
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