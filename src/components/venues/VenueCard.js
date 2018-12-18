import React, {Component} from 'react'
import { Card, Button, CardHeader, CardBody, CardTitle, CardText, Modal, ModalBody, ModalFooter, ButtonGroup } from 'reactstrap'
import { Link } from "react-router-dom"
import "./Venues.css"

export default class VenueCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      contacted: this.props.tourVenue.contacted,
      pending: this.props.tourVenue.pending,
      confirmed: this.props.tourVenue.confirmed
    };

    // this.state = { contacted: false };
    
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
    console.log(this.props.tourVenue)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onCheckboxBtnClick(contacted) {
    this.props.updateTourVenue(contacted)
  }

  changeContacted = (id) => {
  
    const status = {contacted: !this.state.contacted}
    this.props.updateTourVenue(status, id)
    .then(() => this.setState({contacted: this.props.tourVenue.contacted}))
  }

  changeStatus = (property, id) => {
    const status = {[property]: !this.state.property}
    this.props.updateTourVenue(status, id)
  }

  changeStatus = (property, id) => {
    const status = {[property]: !this.state.property}
    this.props.updateTourVenue(status, id)
  }

  render() {
    
    return(
      <div id="cards">
      <Card key={this.props.venue.id} className="venueCard text-center" id="venueCard">
        <CardHeader tag="h3" id="cardHeader">
        {this.props.venue.name}
        </CardHeader>
        <CardBody>
          <CardTitle>{this.props.venue.city}, {this.props.venue.venueState}</CardTitle>
          <CardText>{this.props.venue.buyer}</CardText>
          <CardText>{this.props.venue.email}</CardText>
          <CardText>{this.props.venue.phone}</CardText>
          <CardText>{this.props.venue.notes}</CardText>
          
          
          {

            (this.props.tourpage === false) ? 

              <div id="venueCardButtons">
                <Button className="venueToTour" id="tourButton" size="sm"
                onClick={() => {
                  alert(`${this.props.venue.name} has been added to your tour!`)
                  return (
                    this.props.addVenueToTour(this.props.venue.id)
                  )}}>
                Add to your tour
                </Button>{' '}

                <Link to={`/venues/edit/${this.props.venue.id}`}>
                <Button size="sm" className="card-link" id="editButton">Edit</Button>{' '}
                </Link>

                <Button className="card-link" id="deleteButton" size="sm" onClick={this.toggle}>{this.props.buttonLabel}Delete</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalBody>
                    Are you sure you want to delete this venue?
                  </ModalBody>
                  <ModalFooter>
                  <Button color="danger" size="sm"
                    onClick={() => this.props.deleteVenue(this.props.venue.id, this.props.currentUser)}
                    >Delete</Button>
                  <Button color="secondary" size="sm" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
                <span id="favoriteIcon">
                {this.props.venue.favorite === "yes" ? `👍` : null}
                </span>
              </div>

            :  

              <div>
                <ButtonGroup>
                  {this.state.contacted ?  <Button id="contactedButton" color="danger" size="sm" onClick={() => 
                    this.changeContacted(this.props.tourVenue.id)
                  }
                  >Contacted</Button> : <Button id="contactedButton" color="primary" size="sm" onClick={() => 
                    this.changeContacted(this.props.tourVenue.id)
                  }
                  >Contacted</Button>}
                  
                  <Button id="pendingButton" color="primary" size="sm" onClick={() => this.onCheckboxBtnClick("pending")} active={this.state.pending === true}>Pending</Button>
                  <Button id="confirmedButton" color="primary" size="sm" onClick={() =>
                    this.onCheckboxBtnClick("confirmed")} active={this.state.confirmed === true}>
                    Confirmed
                    </Button>
                </ButtonGroup>
                {/* <p>Selected: {JSON.stringify(this.state.cSelected)}</p> */}

                {/* <ButtonGroup>
                  <Button id="contactedButton" color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>Contacted</Button>
                  <Button id="pendingButton" color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Pending</Button>
                  <Button id="confirmedButton" color="primary" size="sm" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Confirmed</Button>
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.cSelected)}</p> */}
    
                {/* <Button id="contactedButton" color="secondary" size="sm" onClick={() => {
                  return (
                    (this.props.tour.contacted === false) ? (this.props.tour.contacted === true) : (this.props.tour.contacted === false)
                  )}}>Contacted
                </Button>
                <Button id="pendingButton" size="sm" onClick={() => {
                  
                  return (
                    console.log("pending pressed")
                  )}}>Pending
                  </Button>
                <Button id="confirmedButton" size="sm" onClick={() => {
                  return (
                    console.log("confirmed pressed")
                  )}}>Confirmed
                </Button> */}

                <Button className="card-link" id="tourDeleteButton" size="sm" onClick={this.toggle}>{this.props.buttonLabel}Remove</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalBody>
                    Are you sure you want to remove this venue from your tour?
                  </ModalBody>
                  <ModalFooter>
                  <Button color="danger" size="sm"
                    onClick={() => this.props.deleteTourVenue(this.props.tourVenue.id, this.props.currentUser)}
                    >Remove</Button>
                  <Button color="secondary" size="sm" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
                
              </div>
            }
          </CardBody>
        </Card>
        </div>
    )
  }
}


// radio attempt

/* <ButtonGroup> */
/* <Button id="contactedButton" color="secondary" size="sm" onClick={() => this.onRadioBtnClick("contacted")} active={this.state.status === "contacted"}>Contacted</Button>
<Button id="pendingButton" size="sm" color="secondary" onClick={() => this.onRadioBtnClick("pending")} active={this.state.status === "pending"}>Pending</Button>
<Button id="confirmedButton" size="sm" color="secondary" onClick={() => this.onRadioBtnClick("confirmed")} active={this.state.favorite === "confirmed"}>Confirmed</Button> */    
// </ButtonGroup>