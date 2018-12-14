import React, { Component } from 'react';
import './Agent.css';
import IsAuth from "./components/auth/IsAuth"

class Agent extends Component {

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  state = {
    activeUser: this.isAuthenticated(),
    currentUser: parseInt(sessionStorage.getItem("credentials"))
  }

  setAuth = () => {
    this.setState({ activeUser: this.isAuthenticated(), currentUser: parseInt(sessionStorage.getItem("credentials")) })
  }

  render() {
    return (
      <React.Fragment>
        <IsAuth isAuthenticated={this.state.activeUser} currentUser={this.state.currentUser} setAuth={this.setAuth} />
      </React.Fragment>
    );
  }
}

export default Agent;