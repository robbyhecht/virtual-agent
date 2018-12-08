import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from "react-router-dom";


export default class HomePage extends Component {

  render() {
    console.log("hi")
    return(
    <React.Fragment>

      <Link to={`/venues/`}><Button className="card-link" color="primary" size="sm">Venues</Button></Link>
      <Link to={`/tours/`}><Button className="card-link" color="primary" size="sm">Tours</Button></Link>

    </React.Fragment>
    )
  }
  
}