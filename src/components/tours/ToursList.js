import React, { Component } from 'react'
import TourCard from "./TourCard"
import { Button } from "reactstrap"
import "./Tours.css"

export default class ToursList extends Component {

  render() {
    console.log(this.props.tours)
    
    return (

      <React.Fragment>
        <div>
          <h1 className="toursHeader">Tours</h1>
          <section className="newTourButton">
            <Button
              color="info"
              size="large"
              className="btn"
              onClick={() => {
                this.props.history.push("/tours/new");
              }}
            >
            Add New Tour
            </Button>

          </section>
        </div>

        <article className="toursList">
          { 
            this.props.tours.map( tour => {
              return <TourCard key={tour.id} tour={tour} {...this.props} />
            })
          }
        </article>
      </React.Fragment>

    )
  }
}