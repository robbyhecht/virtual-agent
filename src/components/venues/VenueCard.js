import React, {Component} from 'react'
import { Card, Button, CardHeader, CardBody, CardTitle, CardText, ButtonGroup } from 'reactstrap'
import { Link } from "react-router-dom"
import "./Venues.css"

export default class VenueCard extends Component {

  render() {
    
    return(
      <div id="cards">
        
      <Card key={this.props.venue.id} className="venueCard text-center" id="venueCard">
        <CardHeader tag="h3" id="cardHeader">{this.props.venue.name}</CardHeader>
        <CardBody>
          <CardTitle>{this.props.venue.city}, {this.props.venue.venueState}</CardTitle>
          <CardText>{this.props.venue.buyer}</CardText>
          <CardText>{this.props.venue.email}</CardText>
          <CardText>{this.props.venue.phone}</CardText>
          <CardText>{this.props.venue.notes}</CardText>
          
          {
            (this.props.tourpage === false) ? 
              <div>
                <Button className="venueToTour" id="tourButton" size="sm"
                onClick={() => {
                  alert(`${this.props.venue.name} has been added to your tour!`)
                  return (
                    this.props.addVenueToTour(this.props.venue.id)
                  )}}>
                Add to your tour</Button>{' '}

                <Link to={`/venues/edit/${this.props.venue.id}`}>
                <Button size="sm" className="card-link" id="editButton">Edit</Button>{' '}
                </Link>

                <Button
                onClick={() => this.props.deleteVenue(this.props.venue.id, this.props.currentUser)}
                className="card-link" id="deleteButton" size="sm">Delete
                </Button>
              </div>
            : 
              <div>
                <Button id="contactedButton" color="secondary" size="sm" onClick={() => {
                  this.changeContacted()
                  }}>Contacted
                </Button>
                <Button id="pendingButton" size="sm" onClick={() => {
                  console.log("pending pressed")
                  return (
                    console.log("bye")
                  )}}>Pending
                  </Button>
                <Button id="confirmedButton" size="sm" onClick={() => {
                  console.log("confirmed pressed")
                  return (
                    console.log("bye")
                  )}}>Confirmed
                </Button>
              </div>
            }
          </CardBody>
        </Card>
        </div>
    )
  }
}




{/* <div>
<h5>Radio Buttons</h5>
  <ButtonGroup>
    <Button color="primary" onClick={() => this.onRadioBtnClick("Contacted")} active={this.state.rSelected === "Contacted"}>Contacted</Button>
    <Button color="primary" onClick={() => this.onRadioBtnClick("Pending")} active={this.state.rSelected === "Pending"}>Pending</Button>
    <Button color="primary" onClick={() => this.onRadioBtnClick("Confirmed")} active={this.state.rSelected === "Confirmed"}>Confirmed</Button>
  </ButtonGroup>
  <p>Selected: {this.state.rSelected}</p>
</div> */}