import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import "./Venues.css"

export default class VenuesForm extends Component {

  constructor (props) {
    super(props);

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this)
    this.onRadioBtnClickPlayed = this.onRadioBtnClickPlayed.bind(this);

  }

  // Set initial state

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
    user_id: ""
  }

  // Sets the state on the 'favorite' option upon user radio button selection below

  onRadioBtnClick(favorite) {
    this.setState({ favorite });
  }

    // Sets the state on the 'havePlayed' option upon user radio button selection below

  onRadioBtnClickPlayed(havePlayed) {
    this.setState({ havePlayed });
  }

  // Update state with user generated input in form

  handleFieldChange = venue => {
    const stateToChange = {};
    stateToChange[venue.target.id] = venue.target.value;
    this.setState(stateToChange);
  };

  // This method is called on the submit button at the end of the form. Builds new venue submission with user input, calls the addVenue function from AppViews, which is the venues 'post' function, and sends user back to the venues list page.

  constructNewVenue = evt => {
    evt.preventDefault()
    const venues = {
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
      user_id: parseInt(sessionStorage.getItem("credentials"))
    }
    this.props.addVenue(venues).then(() => {
      this.props.history.push("/venues")
    })
  }


  render() {
    return (
      <div id="venuesFormContainer">
        <Form className="venuesForm" id="venuesForm">

          <FormGroup>
            <Label for="name">Venue Name</Label>
            <Input type="text" name="name" id="name" placeholder="" onChange={(event) => this.handleFieldChange(event)}/>
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <Input type="text" name="city" id="city" placeholder="" onChange={(event) => this.handleFieldChange(event)}/>
          </FormGroup>

          <FormGroup>
            <Label for="venueState">State</Label>
            <Input type="select" name="venueState" id="venueState" onChange={(event) => this.handleFieldChange(event)}>
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
            <Input type="text" name="buyer" id="buyer" placeholder="who books this venue?" onChange={(event) => this.handleFieldChange(event)} />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="" onChange={(event) => this.handleFieldChange(event)}/>
          </FormGroup>

          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input type="text" name="phone" id="phone" placeholder="" onChange={(event) => this.handleFieldChange(event)}/>
          </FormGroup>

          <FormGroup>
            <Label for="url">Website</Label>
            <Input type="url" name="url" id="url" placeholder="http://website.com" onChange={(event) => this.handleFieldChange(event)}/>
          </FormGroup>

          <FormGroup>
            <Label for="notes">Notes</Label>
            <Input type="textarea" name="notes" id="notes" onChange={(event) => this.handleFieldChange(event)}/>
          </FormGroup>

          <ButtonGroup>
            <Label for="favorite" id="formFavoriteLabel">Mark As Favorite?</Label>
            <Button id="venueFormYes" size="sm" onClick={() => this.onRadioBtnClick("yes")} active={this.state.favorite === "yes"}>Yes</Button>
            <Button id="venueFormNo" size="sm" onClick={() => this.onRadioBtnClick("no")} active={this.state.favorite === "no"}>No</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Label for="havePlayed" id="formHavePlayedLabel">Played this venue before?</Label>
            <Button id="venueFormPlayedYes" size="sm" onClick={() => this.onRadioBtnClickPlayed("yes")} active={this.state.havePlayed === "yes"}>Yes</Button>
            <Button id="venueFormPlayedNo" size="sm" onClick={() => this.onRadioBtnClickPlayed("no")} active={this.state.havePlayed === "no"}>No</Button>
          </ButtonGroup>

          <div id="submitButtonContainer">
            <Button            
              type="submit"
              size="lg"
              content="Submit"
              id="newVenueSubmitButton"
              onClick={this.constructNewVenue}
              >
              Submit
              </Button>
            </div>
            
        </Form>
      </div>
    );
  }
}