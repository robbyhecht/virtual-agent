import React, {Component} from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap'
import { Link } from "react-router-dom"
import "./Tours.css"

export default class TourCard extends Component {

  render() {

    return(

      <div>
        <h2>{this.props.tour.name}</h2>

        {/* <Card key={this.props.tour.id} className="tourCard text-center" style={{width:"60%"}}>

        <CardHeader>
        {this.props.tour.name}
        </CardHeader>

        <CardBody> */}

          <Button
            onClick={() => this.props.deleteTour(this.props.tour.id)
            .then(tours =>
              this.setState({ tours: tours }))}
            className="card-link" color="danger" size="sm">Delete
          </Button>

        {/* </CardBody>

        </Card> */}
      </div>


    )
  }
}