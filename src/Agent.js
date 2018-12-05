import React, { Component } from 'react';
import './Agent.css';
import ApplicationViews from "./components/ApplicationViews"
import Navbar from "./components/navbar/Navbar"
import {  } from 'reactstrap'
import VenuesForm from "./components/venues/VenuesForm"

class Agent extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {/* remove this */}
        <VenuesForm />
        <div>
        <ApplicationViews />
        </div>
      </React.Fragment>
    );
  }
}

export default Agent;
