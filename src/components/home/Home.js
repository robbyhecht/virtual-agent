import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import { Link } from "react-router-dom";
import "./Home.css"


export default class HomePage extends Component {

  render() {
    return(
    <Container id="homeDiv">
      <Row>
      <Col>
      <h1 id="slogan">Where do you <br /> want to play?</h1>
      </Col>
      <Col>
      <Link to={`/venues/`}><Button className="card-link" color="primary" size="sm" id="button1">ENTER VENUES</Button></Link>
      </Col>
      </Row>
      <Row>
      <Col>
      <p id="sub-slogan">Book gigs.<br />
      Stay organized.<br />
      Take your touring to the next level.</p>
      </Col>
      <Col>
      <Link to={`/tours/`}><Button className="card-link" color="primary" size="sm" id="button2">ENTER TOUR</Button></Link>
      </Col>
      </Row>
    </Container>
    )
  }
  
}