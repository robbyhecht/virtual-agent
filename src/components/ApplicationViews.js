import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import VenuesList from "./venues/VenuesList"
import VenueCard from "./venues/VenueCard"
import VenuesForm from "./venues/VenuesForm"

// import VenuesManager from "./managers/VenuesManager"

export default class ApplicationViews extends Component {
  
  state = {
    venues: []
  }

  let venuesLoading = VenuesManager.getAll().then(allVenues => {
    this.setState({
      venues: allVenues
    });
  });

  








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