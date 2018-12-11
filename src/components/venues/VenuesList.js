import React, { Component } from 'react'
import VenueCard from "./VenueCard"
import "./Venues.css"
import { Button } from "reactstrap"


export default class VenuesList extends Component {

  render() {

    return (

      <React.Fragment>

        <div className="venuesTop">
          <h1 className="venuesHeader">Venues</h1>
          <section className="newVenueButton">
            <Button
              color="info"
              size="large"
              className="btn"
              onClick={() => {
                this.props.history.push("/venues/new");
              }}
            >
              Add New Venue
            </Button>
            <Button
              color="info"
              size="large"
              className="btn"
              onClick={() => {
                // place onClick event here
              }}
            >
              Filter Venues By State
            </Button>
            
          </section>
        </div>

        <article className="venuesList">
          {
            this.props.venues.map(venue => {
              return <VenueCard key={venue.id} venue={venue} {...this.props} />
          
            } ) 
          }
        </article>

      </React.Fragment>
    )
  }
}
