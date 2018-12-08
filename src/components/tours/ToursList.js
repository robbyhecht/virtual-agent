import React, { Component } from 'react'

export default class ToursList extends Component {

  render() {
    console.log("list", this.props.tours)
    return (
      <h1 className="toursHeader">Tours</h1>

    )
  }
}