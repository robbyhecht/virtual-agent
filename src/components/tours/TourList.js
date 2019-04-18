import React, { Component } from "react";
import VenueCard from "../venues/VenueCard";
import { Button } from 'reactstrap'
import "./Tour.css";

export default class TourList extends Component {
  state = {
    page : "tour"
  }

  // Sets the state of 'tourpage' to 'true', letting VenueCard know to assign tour page buttons on card display. in VenuesList, this same function mounts as 'false'

  componentDidMount() {
    this.props.updateTourButtons(true)
  }


  // FILTER FUNCTIONS

  // filters by 'contacted' property
  handleClickContacted() {
    this.props.filterVenuesByContacted()
  }

  // filters by 'pending' property
  handleClickPending() {
    this.props.filterVenuesByPending()
  }

  // filters by 'confirmed' property
  handleClickConfirmed() {
    this.props.filterVenuesByConfirmed()
  }

  // shows only properties that are not marked as contacted, pending or confirmed
  handleClickNew() {
    this.props.filterVenuesByNew()
  }

  // reloads the page to remove filter
  removeFilter = () => {
    window.location.reload()
  }
  

  render() {

    return (
      <React.Fragment>

        <h1 id="tourHeader">MY TOUR</h1>

        <section id="tourFilterButtons">

          {/* filter venues by new */}
          <Button
            id="newFilterButton"
            size="large"
            className="btn"
            onClick={() => {
              this.handleClickNew()
            }}>
            Filter By New
          </Button>

          {/* filter venues by contacted */}
          <Button
            id="contactedFilterButton"
            size="large"
            className="btn"
            onClick={() => {
              this.handleClickContacted()
            }}>
            Filter By Contacted
          </Button>

          {/* filter venues by pending*/}
          <Button
            id="pendingFilterButton"
            size="large"
            className="btn"
            onClick={() => {
              this.handleClickPending()
            }}>
            Filter By Pending
          </Button>

          {/* filter venues by confirmed */}
          <Button
            id="confirmedFilterButton"
            size="large"
            className="btn"
            onClick={() => {
              this.handleClickConfirmed()
            }}>
            Filter By Confirmed
          </Button>

          {/* remove filter */}
          <Button
          id="removeTourFilterButton"
          size="large"
          className="btn"
          onClick={() => {
            this.removeFilter()
          }}>
          Remove Tour Filter
          </Button>

        </section>
        
        {/* map over the 'tour' array and compare venueIds with the 'venues' array. Each matching venue is given the label 'tourVenue' and passed to VenueCard. */}
        <article className="tourVenuesList" id="tourVenuesList">
          {
            this.props.tour.map(tourVenue => {
              let venue = this.props.venues.find(venue => venue.id === tourVenue.venueId);
              return <VenueCard page={this.state.page} key={tourVenue.id} tourVenue={tourVenue} venue={venue} {...this.props} />
            })
          }
        </article>
          
      </React.Fragment>
    )
  }
}