import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap'
import { Link } from "react-router-dom";
import "./Venues.css"
class VenuesEdit extends Component {
  
  // Set initial state for editing

    state = {
        name: "",
        city: "",
        venueState: "",
        buyer: "",
        email: "",
        phone: "",
        url: "",
        notes: "",
        favorite: "",
        havePlayed: "",
        id: ""
    }

    constructor (props) {
      super(props);
  
      this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
      this.onRadioBtnClickPlayed = this.onRadioBtnClickPlayed.bind(this);

    }
  
    // Sets the state on the 'favorite' option upon user radio button selection below

    onRadioBtnClick(favorite) {
      this.setState({ favorite });
    }

    onRadioBtnClickPlayed(havePlayed) {
      this.setState({ havePlayed });
    }

    // Sets the state on the 'havePlayed' option upon user radio button selection below

    // onRadioBtnClick(havePlayed) {
    //   this.setState({ havePlayed });
    // }

    // Sets state using values entered by user below

    handleFieldChange = venue => {
        const stateToChange = {}
        stateToChange[venue.target.id] = venue.target.value
        this.setState(stateToChange)
    }

    // Mount the particular venue object we are editing
venueId = parseInt(this.props.match.params.venueId)
    componentDidMount() {
      console.log("venues",this.props.venues)
        let newState = {}
        let venue = this.props.venues.find(venue => venue.id === this.venueId)
        newState.name = venue.name
        newState.city = venue.city
        newState.venueState = venue.venueState
        newState.buyer = venue.buyer
        newState.email = venue.email
        newState.phone = venue.phone
        newState.url = venue.url
        newState.notes = venue.notes
        newState.favorite = venue.favorite
        newState.havePlayed = venue.havePlayed
        newState.id = venue.id
        this.setState(newState)
    }
  
    // This method runs when the submit button is clicked at the bottom of the form. Runs editVenue method from AppViews which is the venue patch method. Then sends user back to venues page.

    editSubmittedVenue = evt => {
        evt.preventDefault()
        const venue = {
          name: this.state.name,
          city: this.state.city,
          venueState: this.state.venueState,
          buyer: this.state.buyer,
          email: this.state.email,
          phone: this.state.phone,
          url: this.state.url,
          notes: this.state.notes,
          favorite: this.state.favorite,
          havePlayed: this.state.havePlayed,
          id: this.state.id
        }
        return this.props.editVenue(venue, `${this.state.id}`)
            .then(() => this.props.history.push("/venues"))
    }

    render() {
        return (
          <div className="editContainer" id="editContainer">
            <Form className="editVenueForm" id="editForm">

              <FormGroup>
                <Label for="name">Venue Name</Label>
                <Input type="text" name="name" id="name" defaultValue={this.state.name}
                onChange={(event) => this.handleFieldChange(event)} />
              </FormGroup>

              <FormGroup>
                <Label for="city">City</Label>
                <Input type="text" name="city" id="city" defaultValue={this.state.city}
                onChange={(event) => this.handleFieldChange(event)}/>
              </FormGroup>

              <FormGroup>
                <Label for="venueState">State</Label>
                <Input type="select" name="venueState" id="venueState" value={this.state.venueState} onChange={(event) => this.handleFieldChange(event)}>
                  <option value=""></option>
                  <option value="AK">Alaska</option>
                  <option value="AL">Alabama</option>
                  <option value="AR">Arkansas</option>
                  <option value="AZ">Arizona</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DC">District of Columbia</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="IA">Iowa</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MD">Maryland</option>
                  <option value="ME">Maine</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MO">Missouri</option>
                  <option value="MS">Mississippi</option>
                  <option value="MT">Montana</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="NE">Nebraska</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NV">Nevada</option>
                  <option value="NY">New York</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VA">Virginia</option>
                  <option value="VT">Vermont</option>
                  <option value="WA">Washington</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WV">West Virginia</option>
                  <option value="WY">Wyoming</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="buyer">Talent Buyer</Label>
                <Input type="text" name="buyer" id="buyer" onChange={(event) => this.handleFieldChange(event)} defaultValue={this.state.buyer} />
              </FormGroup>

              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" onChange={(event) => this.handleFieldChange(event)} defaultValue={this.state.email} />
              </FormGroup>

              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input type="text" name="phone" id="phone" onChange={(event) => this.handleFieldChange(event)} defaultValue={this.state.phone} />
              </FormGroup>

              <FormGroup>
                <Label for="url">Website</Label>
                <Input type="url" name="url" id="url" onChange={(event) => this.handleFieldChange(event)} defaultValue={this.state.url} />
              </FormGroup>

              <FormGroup>
                <Label for="notes">Notes</Label>
                <Input type="textarea" name="notes" id="notes" onChange={(event) => this.handleFieldChange(event)} value={this.state.notes}/>
              </FormGroup>

              <ButtonGroup> 
                <Label id="editFavoriteLabel" for="favorite">Mark As Favorite?</Label>
                <Button id="venueEditYes" size="sm" onClick={() => this.onRadioBtnClick("yes")} active={this.state.favorite === "yes"} value={this.state.favorite}>Yes</Button>
                <Button id="venueEditNo" size="sm" onClick={() => this.onRadioBtnClick("no")} active={this.state.favorite === "no"} value={this.state.favorite}>No</Button>
              </ButtonGroup>

              <ButtonGroup>
                <Label id="editHavePlayedLabel" for="havePlayed">Played this venue before?</Label>
                <Button id="venueEditPlayedYes" size="sm" onClick={() => this.onRadioBtnClickPlayed("yes")} active={this.state.havePlayed === "yes"} value={this.state.havePlayed}>Yes</Button>
                <Button id="venueEditPlayedNo" size="sm" onClick={() => this.onRadioBtnClickPlayed("no")} active={this.state.havePlayed === "no"} value={this.state.havePlayed}>No</Button>
              </ButtonGroup>

              <div id="editButtons">

              <Button size="large" id="editVenueSubmitButton" onClick={this.editSubmittedVenue}>Submit Edit</Button>{' '}

              <Link to={`/venues/`}><Button id="editVenueBackButton" className="card-link" size="large">Back</Button></Link>

              </div>

          </Form>
         </div>
        );
    }
}

export default VenuesEdit