import React, {Component} from 'react'
import { Card, Button, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
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




          <Button className="venueToTour" id="tourButton" size="sm"
          onClick={() => {
            console.log("addVenueToTour clicked")
            return this.props.addVenueToTour(this.props.venue.id)
          }
        }
            >
          Add to your tour</Button>{' '}






          <Link to={`/venues/edit/${this.props.venue.id}`}>
          <Button size="sm" className="card-link" id="editButton">Edit</Button>{' '}
          </Link>

          <Button
          onClick={() => this.props.deleteVenue(this.props.venue.id, this.props.currentUser)}
          className="card-link" id="deleteButton" size="sm">Delete
          </Button>

        </CardBody>
      </Card>
    </div>
    )
  }
}


        {/* <CardFooter className="text-muted">          
          <CardText>Have played: {this.props.venue.played}</CardText>
          <CardText>Favorite: {this.props.venue.favorites}</CardText>
        </CardFooter> */}