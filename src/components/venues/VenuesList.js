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



  // animalOwner(animalId) {
  //   console.log("owners", animalId)
  //   let animalOwners = this.props.owners_animals
  //   .filter( join => join.animal_id === animalId)
  //   .map( join => this.props.owners.find( owner => owner.id === join.owner_id ).name)

  //   console.log('owners', animalOwners );

  //   return animalOwners
  // }