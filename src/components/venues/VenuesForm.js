import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class VenuesForm extends Component {
  render() {
    return (
      <Form className="venuesForm">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="venueName" placeholder="Venue Name" />
        </FormGroup>
        <FormGroup>
          <Label for="venueCity">City</Label>
          <Input type="text" name="venueCity" id="venueCity" placeholder="City" />
        </FormGroup>
        <FormGroup>
          <Label for="venueState">State</Label>
          <Input type="select" name="venueState" id="venueState">
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
          <Label for="venueBuyer">Talent Buyer</Label>
          <Input type="text" name="venueBuyer" id="venueBuyer" placeholder="Talent Buyer" />
        </FormGroup>
        <FormGroup>
          <Label for="venueEmail">Email</Label>
          <Input type="email" name="venueEmail" id="venueEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="venuePhone">Phone</Label>
          <Input type="text" name="venuePhone" id="venuePhone" placeholder="Phone number" />
        </FormGroup>
        <FormGroup>
          <Label for="venueUrl">Website</Label>
          <Input type="url" name="venueUrl" id="venueUrl" placeholder="Web address" />
        </FormGroup>
        <FormGroup>
          <Label for="venueNotes">Notes</Label>
          <Input type="textarea" name="venueNotes" id="venueNotes" />
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
        <Button>Submit</Button>
      </Form>
    );
  }
}