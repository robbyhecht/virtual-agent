import React, { Component } from 'react'
import VenueCard from "./VenueCard"
import "./Venues.css"
import { Button, Collapse, Card, CardBody } from "reactstrap"


export default class VenuesList extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {

    return (

      <React.Fragment>

        <div className="venuesTop">
          <h1 className="venuesHeader">Venues</h1>
          <section className="newVenueButton">
            <Button
              color="info"
              size="large"
              className="btn"
              onClick={() => {
                this.props.history.push("/venues/new");
              }}
            >
              Add New Venue
            </Button>
            {/* <Button
              color="info"
              size="large"
              className="btn"
              onClick={() => {
                // place onClick event here
              }}
            >
              Filter Venues By State
            </Button> */}
            {/* <div> */}
              <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                  Anim
                  </CardBody>
                </Card>
              </Collapse>
            {/* </div> */}
            
          </section>
        </div>

        <article className="venuesList">
          {
            this.props.venues.map(venue => {
              return <VenueCard key={venue.id} venue={venue} {...this.props} />
          
            } ) 
          }
        </article>

      </React.Fragment>
    )
  }
}
