import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Tours.css"

export default class ToursForm extends Component {

  // Set initial state
  state = {
    name: "",
    userId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = tour => {
    const stateToChange = {};
    stateToChange[tour.target.id] = tour.target.value;
    this.setState(stateToChange);
  };

  constructNewTour = tour => {
    tour.preventDefault()
    const tours = {
      name: this.state.name,
      userId: sessionStorage.getItem("username")
    }
    this.props.addTour(tours).then(() => {
      this.props.history.push("/tours")
    })
  }


  render() {
    return (
      <Form className="toursForm">
        <FormGroup>
          <Label for="name">Tour Name</Label>
          <Input type="text" name="name" id="tourName" placeholder="" />
        </FormGroup>

        <Button            
          type="submit"
          size="lg"
          color="success"
          content="Submit"
          onClick={this.constructNewTour}
          >
          Submit
          </Button>
      </Form>
    );
  }
}