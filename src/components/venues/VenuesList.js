import React, { Component } from 'react'
import VenueCard from "./VenueCard"
import "./Venues.css"
import { Button } from "reactstrap"


export default class VenuesList extends Component {

  render() {

    return (
      <React.Fragment>
        <section className="newVenueButton">
          <Button
            color="info"
            size="large"
            className="btn"
            onClick={() => {
              this.props.history.push("/events/new");
            }}
          >
            Add New Venue
          </Button>
        </section>
        <article className="venues list">
          {
            this.props.venues.map( venue =>
              <VenueCard key={venue.id} venue={venue} {...this.props} />
            )
          }
        </article>

      </React.Fragment>
    )
  }
}
