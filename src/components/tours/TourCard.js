import React, {Component} from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap'
import { Link } from "react-router-dom"
import "./Tours.css"

export default class TourCard extends Component {

  render() {

    return(

      <div>
    
        <div>
        
          {/* make venue cards post in this div? */}

          

        </div>





        <p>{this.props.tour.name}</p>

        {/* <Card key={this.props.tour.id} className="tourCard text-center" style={{width:"60%"}}>

        <CardHeader>
        {this.props.tour.name}
        </CardHeader>

        <CardBody> */}

          <Button
            onClick={() => 
            this.props.deleteTour(this.props.tour.id)
            }
            className="card-link" color="danger" size="sm">Delete
          </Button>
      </div>


    )
  }
}