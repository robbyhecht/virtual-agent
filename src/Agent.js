import React, { Component } from 'react';
import './Agent.css';
import IsAuth from "./components/auth/IsAuth"
// import ApplicationViews from "./components/ApplicationViews"
// import NavBar from "./components/navbar/Navbar"

class Agent extends Component {

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  state = {
    activeUser: this.isAuthenticated()
  }

  setAuth = () => {
    this.setState({ auth: this.isAuthenticated() })
  }

  render() {
    return (
      <React.Fragment>
        <IsAuth isAuthenticated={this.isAuthenticated} setAuth={this.setAuth} />
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