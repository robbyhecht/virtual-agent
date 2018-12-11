import React, { Component } from 'react';
import './Agent.css';
import IsAuth from "./components/auth/IsAuth"
// import ApplicationViews from "./components/ApplicationViews"
// import NavBar from "./components/navbar/Navbar"

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
    console.log("user from Agent", this.state.currentUser)
    return (
      <React.Fragment>
        <IsAuth isAuthenticated={this.state.activeUser} currentUser={this.state.currentUser} setAuth={this.setAuth} />
      </React.Fragment>
    );
  }
}

export default Agent;


// export default class Agent extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <NavBar />
//         <ApplicationViews />
//       </React.Fragment>
//     );
//   }
// }