import React, {Component} from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap'
import { Link } from "react-router-dom"
import "./Venues.css"

export default class VenueCard extends Component {

  render() {
    return(
      <div>
      <Card key={this.props.venue.id} className="venueCard text-center" style={{width:"60%"}}>
        <CardHeader tag="h3">{this.props.venue.name}</CardHeader>
        <CardBody>
          <CardTitle>{this.props.venue.city}, {this.props.venue.state}</CardTitle>
          <CardText>{this.props.venue.buyer}</CardText>
          <CardText>{this.props.venue.email}</CardText>
          <CardText>{this.props.venue.phone}</CardText>
          <CardText>{this.props.venue.url}</CardText>
          <CardText>{this.props.venue.notes}</CardText>

          <Button color="success" size="sm">Add to a tour</Button>{' '}

          <Link to={`/venues/edit/${this.props.venue.id}`}>
          <Button color="primary" size="sm" className="card-link">Edit</Button>{' '}</Link>

          <Button
          onClick={() => this.props.deleteVenue("venues", this.props.venue.id)
          .then(venues =>
            this.setState({ venues: venues }))}
          className="card-link" color="danger" size="sm">Delete</Button>

        </CardBody>
        <CardFooter className="text-muted">          
          <CardText>Have played: {this.props.venue.played}</CardText>
          <CardText>Favorite: {this.props.venue.favorites}</CardText>
        </CardFooter>
      </Card>
    </div>
    )
  }
}