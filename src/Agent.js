import React, { Component } from 'react';
import './Agent.css';
import ApplicationViews from "./components/ApplicationViews"
import Navbar from "./components/navbar/Navbar"
import {  } from 'reactstrap'

class Agent extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ApplicationViews />
    </React.Fragment>
    );
  }
}

export default Agent;
