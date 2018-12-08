import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from "react-router-dom";
import "./Home.css"


export default class HomePage extends Component {

  render() {
    return(
    <div className="homeDiv">
      <Link to={`/venues/`}><Button className="card-link" color="primary" size="sm">Venues</Button></Link>
      <Link to={`/tours/`}><Button className="card-link" color="primary" size="sm">Tours</Button></Link>
    </div>
    )
  }
  
}