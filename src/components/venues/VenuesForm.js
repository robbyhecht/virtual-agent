import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Venues.css"

export default class VenuesForm extends Component {

  // Set initial state
  state = {
    name: "",
    city: "",
    state: "",
    buyer: "",
    email: "",
    phone: "",
    url: "",
    notes: "",
    played: false,
    favorites: false,
    userId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = venue => {
    const stateToChange = {};
    stateToChange[venue.target.id] = venue.target.value;
    this.setState(stateToChange);
  };

  constructNewVenue = venue => {
    venue.preventDefault()
    const venues = {
      name: this.state.name,
      city: this.state.city,
      state: this.state.state,
      buyer: this.state.buyer,
      email: this.state.email,
      phone: this.state.phone,
      url: this.url.state,
      notes: this.state.notes,
      played: this.played.state,
      favorites: this.state.favorites,
      userId: sessionStorage.getItem("username")
    }
    this.props.addVenue(venues).then(() => {
      this.props.history.push("/venues")
    })
  }


  render() {
    return (
      <Form className="venuesForm">
        <FormGroup>
          <Label for="name">Venue Name</Label>
          <Input type="text" name="name" id="venueName" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" name="city" id="city" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input type="select" name="state" id="state">
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
          <Input type="text" name="buyer" id="buyer" placeholder="who books this venue?" />
        </FormGroup>
        <FormGroup>
          <Label for="venueEmail">Email</Label>
          <Input type="email" name="venueEmail" id="venueEmail" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input type="text" name="phone" id="phone" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="url">Website</Label>
          <Input type="url" name="url" id="url" placeholder="http://website.com" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Have played
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Favorites
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="notes">Notes</Label>
          <Input type="textarea" name="notes" id="notes" />
        </FormGroup>
        <Button            
          type="submit"
          size="lg"
          color="success"
          content="Submit"
          onClick={this.constructNewVenue}
          >
          Submit
          </Button>
      </Form>
    );
  }
}