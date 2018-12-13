import React, {Component} from 'react'
import { Card, Button, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import { Link } from "react-router-dom"
import "./Venues.css"

export default class VenueCard extends Component {

  state = {
    contacted: false,
    pending: false,
    confirmed: false
  }

  changeContacted() {
    this.setState({contacted: !this.state.contacted})
    this.state.contacted === false ? this.color="secondary" : this.color="success"
    console.log("button clicked")
  }

  changePending() {
    this.setState({pending: !this.state.pending})
    this.state.pending === false ? this.color="secondary" : this.color="success"
    console.log("button clicked")
  }

  changeConfirmed() {
    this.setState({confirmed: !this.state.confirmed})
    this.state.confirmed === false ? this.color="secondary" : this.color="success"
    console.log("button clicked")
  }

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

          {/* VENUE CARD BUTTONS */}
          
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
                <Button color="danger" size="sm" onClick={() => {
                  console.log("pending pressed")
                  return (
                    console.log("bye")
                  )}}>Pending
                </Button>
                <Button color="danger" size="sm" onClick={() => {
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