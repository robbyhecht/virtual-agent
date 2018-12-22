import React, { Component } from 'react';
import './Agent.css';
import IsAuth from "./components/auth/IsAuth"

class Agent extends Component {


  // Declares that user credentials exist in the database. Will dictate whether props are passed to the Welcome component via ternary on the IsAuth component.

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  // Sets state of user's authentication

  state = {
    activeUser: this.isAuthenticated(),
    currentUser: parseInt(sessionStorage.getItem("credentials"))
  }

  //  Sets user credentials upon registration and login. Will be called on Login page.

  setAuth = () => {
    this.setState({ activeUser: this.isAuthenticated(), currentUser: parseInt(sessionStorage.getItem("credentials")) })
  }

  // Sends props to isAuth component

  render() {
    return (
      <React.Fragment>
        <IsAuth isAuthenticated={this.state.activeUser} currentUser={this.state.currentUser} setAuth={this.setAuth} />
      </React.Fragment>
    );
  }
}

export default Agent;