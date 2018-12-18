import React, { Component } from "react";
import VenueCard from "./../venues/VenueCard";
import "./Tours.css";

export default class ToursList extends Component {



  componentDidMount() {
    this.props.updateTourButtons(true)
  }

  render() {

    return (
      <React.Fragment>
        <h1 id="tourHeader">MY TOUR</h1>
        <div id="venuesContainer">
          <article className="venuesList">
            {
              this.props.tour.map(tourVenue => {
                let venue = this.props.venues.find(venue => venue.id === tourVenue.venue_id);

                return <VenueCard key={tourVenue.id} tourVenue={tourVenue} venue={venue} {...this.props} />
              })
            }
          </article>
        </div>
      </React.Fragment>
    )}
  }
