import React, {Component} from 'react'
import { Card, Button, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import { Link } from "react-router-dom"
import "./Venues.css"

export default class VenueCard extends Component {

  render() {
    return(

      <div>
        
      <Card key={this.props.venue.id} className="venueCard text-center" style={{width:"60%"}}>
        <CardHeader tag="h3">{this.props.venue.name}</CardHeader>
        <CardBody>
          <CardTitle>{this.props.venue.city}, {this.props.venue.venueState}</CardTitle>
          <CardText>{this.props.venue.buyer}</CardText>
          <CardText>{this.props.venue.email}</CardText>
          <CardText>{this.props.venue.phone}</CardText>
          <CardText>{this.props.venue.notes}</CardText>




          <Button className="venueToTour" color="success" size="sm"
          onClick={() => 
            this.props.addVenueToTour(this.props.tours.venue_id, this.props.currentUser)
        }
            >
          Add to your tour</Button>{' '}






          <Link to={`/venues/edit/${this.props.venue.id}`}>
          <Button color="primary" size="sm" className="card-link">Edit</Button>{' '}
          </Link>

          <Button
          onClick={() => this.props.deleteVenue(this.props.venue.id, this.props.currentUser)}
          className="card-link" color="danger" size="sm">Delete
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