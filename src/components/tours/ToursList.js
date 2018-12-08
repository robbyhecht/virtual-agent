import React, { Component } from 'react'
import { Button } from "reactstrap"

export default class ToursList extends Component {

  render() {
    console.log("list", this.props.tours)
    return (

      <React.Fragment>
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
      </React.Fragment>

    )
  }
}