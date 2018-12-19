import React, { Component } from "react";
import VenueCard from "./../venues/VenueCard";
import "./Tours.css";

export default class ToursList extends Component {

  // Sets the state of 'tourpage' to 'true', letting VenueCard know to assign tour page buttons on card display. in VenuesList, this same function mounts as 'false'

  componentDidMount() {
    this.props.updateTourButtons(true)
  }

  render() {

    return (
      <React.Fragment>

        <h1 id="tourHeader">MY TOUR</h1>
        
        <div id="tourVenuesContainer">

          {/* map over the 'tour' array and compare venue_ids with the 'venues' array. Each matching venue is given the label 'tourVenue' and passed to VenueCard. */}
        
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
