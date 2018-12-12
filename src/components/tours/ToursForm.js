import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Tours.css"

export default class ToursForm extends Component {

  // Set initial state
  state = {
    name: "",
  };

  // Update state whenever an input field is edited
  handleFieldChange = event => {
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;
    this.setState(stateToChange);
  };

    // Update state whenever an input field is edited

  constructNewTour = (evt) => {
    console.log("construct new tour clicked")
    evt.preventDefault()
    const tour = {
      name: this.state.name,
      user_id: parseInt(sessionStorage.getItem("credentials"))
    }
    this.props.addTour(tour).then(() => {
      this.props.history.push("/tours")
    })
  }


  render() {
    return (
      <Form className="toursForm">
        <FormGroup>
          <Label for="name">Tour Name</Label>
          <Input type="text" name="name" id="name" placeholder="example: Southeast 2020" onChange={(event) => this.handleFieldChange(event)} />
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