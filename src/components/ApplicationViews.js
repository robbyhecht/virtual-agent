import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import VenuesForm from "./venues/VenuesForm"

export default class ApplicationViews extends Component {
  
  render() {
    return(
      <React.Fragment>
        
        <Route exact path="/venues/new" render={props => {
            // if (this.isAuthenticated()) {
              return <VenuesForm {...props} addEvent={this.addEvent} />
            // } else {
            //   return <Redirect to="/login" />
            // }
          }}
          />

      </React.Fragment>
    )
  }
}