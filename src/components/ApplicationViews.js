import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import VenuesList from "./venues/VenuesList"
import VenuesForm from "./venues/VenuesForm"
import VenuesManager from "./../managers/VenuesManager"
import VenuesEdit from "./venues/VenuesEdit"


export default class ApplicationViews extends Component {
  
  state = {
    venues: []
  }

    addVenue = venues => {
      return new Promise((resolve, reject) => {
        VenuesManager.addAndList(venues)
          .then(() => VenuesManager.getAll()).then(venues =>
            this.setState({
              venues: venues
            }, () => {
              resolve()
            })
          );
      })
    }
  
    editVenues = (venues, url) => {
      return new Promise((resolve, reject) => {
        VenuesManager.patchAndListEvent(venues, url)
          .then(() => VenuesManager.getAll())
          .then(venues =>
            this.setState({
              venues: venues
            }, () => {
              resolve()
            })
          );
      })
    }
  
    deleteVenues = (oldFriend, user) => {
      return VenuesManager.removeAndList(oldFriend, user).then(venues =>
        this.setState({
          venues: venues
        })
      );
    };
  
  render() {
    return(
      <React.Fragment>

        <Route exact path="/venues" render={props => {
          // if (this.isAuthenticated()) {
            return <VenuesList {...props}
              friends={this.state.friends}
              venues={this.state.venues}
              deleteVenues={this.deleteVenues} />
          // } else {
          //   return <Redirect to="/login" />
          // }
        }}
          />
        
        <Route exact path="/venues/new" render={props => {
            // if (this.isAuthenticated()) {
              return <VenuesForm {...props} addVenue={this.addVenue} />
            // } else {
            //   return <Redirect to="/login" />
            // }
          }}
          />

        <Route path="/venues/edit/:venueId(\d+)"
          render={props => {
            // if (this.isAuthenticated()) {
              return <VenuesEdit {...props}
                venues={this.state.venues}
                editVenues={this.editVenues} />
            // } else {
            //   return <Redirect to="/login" />
            // }
          }} />

        {/* <Route path="/venues/:venuesId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <VenuesDetail {...props}
              venues={this.state.venues}
              deleteVenues={this.deleteVenues}
            />
          } else {
            return < Redirect to="/login" />
          }
        }} /> */}

      </React.Fragment>
    )
  }
}