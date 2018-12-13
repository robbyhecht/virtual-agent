import React, { Component } from "react";
import VenueCard from "./../venues/VenueCard";
import VenuesManager from "./../../managers/VenuesManager"
import { Button } from "reactstrap";
import "./Tours.css";

export default class ToursList extends Component {

  state = {
    venues: []
  }

  componentDidMount() {
    let venues = this.props.tour.map(tour => {
      return VenuesManager.getVenue(tour.venue_id).then((venue) => venue)
    })
    Promise.all(venues)
    .then( (venues) => this.setState({venues: venues}))

    this.props.updateTourButtons(true)
  }

  render() {
    console.log("venues", this.state.venues)

    return (
      <React.Fragment>
        <h1 id="tourHeader">MY TOUR</h1>
        <div id="venuesContainer">
          <article className="venuesList">
            {
              this.state.venues.map(venue => {
                return <VenueCard key={venue.id} venue={venue} {...this.props} />
            })
            }
          </article>
        </div>
      </React.Fragment>
    );
  }
}
