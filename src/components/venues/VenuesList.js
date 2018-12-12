import React, { Component } from 'react'
import VenueCard from "./VenueCard"
import "./Venues.css"
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from 'reactstrap'


export default class VenuesList extends Component {

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }



  render() {
    // console.log("filter", this.props.filterVenueStates)

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

            <Dropdown
            isOpen={this.state.dropdownOpen} toggle={this.toggle}
            name="venueState" id="venueState" value="venueState"
            // onChange={((this.venueState.value))}
            >
        <DropdownToggle caret>
          Filter By State
        </DropdownToggle>
        <DropdownMenu 
        // onChange={(event) => this.handleFieldChange(event)}
        >
          {/* <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem> */}
          {/* <DropdownItem>Another Action</DropdownItem> */}
          {/* <DropdownItem divider /> */}
          <DropdownItem value="AK">Alaska</DropdownItem>
          <DropdownItem value="AL">Alabama</DropdownItem>
          <DropdownItem value="AR">Arkansas</DropdownItem>
          <DropdownItem value="AZ">Arizona</DropdownItem>
          <DropdownItem value="CA">California</DropdownItem>
          <DropdownItem value="CO">Colorado</DropdownItem>
          <DropdownItem value="CT">Connecticut</DropdownItem>
          <DropdownItem value="DC">District of Columbia</DropdownItem>
          <DropdownItem value="DE">Delaware</DropdownItem>
          <DropdownItem value="FL">Florida</DropdownItem>
          <DropdownItem value="GA">Georgia</DropdownItem>
          <DropdownItem value="HI">Hawaii</DropdownItem>
          <DropdownItem value="IA">Iowa</DropdownItem>
          <DropdownItem value="ID">Idaho</DropdownItem>
          <DropdownItem value="IL">Illinois</DropdownItem>
          <DropdownItem value="IN">Indiana</DropdownItem>
          <DropdownItem value="KS">Kansas</DropdownItem>
          <DropdownItem value="KY">Kentucky</DropdownItem>
          <DropdownItem value="LA">Louisiana</DropdownItem>
          <DropdownItem value="MA">Massachusetts</DropdownItem>
          <DropdownItem value="MD">Maryland</DropdownItem>
          <DropdownItem value="ME">Maine</DropdownItem>
          <DropdownItem value="MI">Michigan</DropdownItem>
          <DropdownItem value="MN">Minnesota</DropdownItem>
          <DropdownItem value="MO">Missouri</DropdownItem>
          <DropdownItem value="MS">Mississippi</DropdownItem>
          <DropdownItem value="MT">Montana</DropdownItem>
          <DropdownItem value="NC">North Carolina</DropdownItem>
          <DropdownItem value="ND">North Dakota</DropdownItem>
          <DropdownItem value="NE">Nebraska</DropdownItem>
          <DropdownItem value="NH">New Hampshire</DropdownItem>
          <DropdownItem value="NJ">New Jersey</DropdownItem>
          <DropdownItem value="NM">New Mexico</DropdownItem>
          <DropdownItem value="NV">Nevada</DropdownItem>
          <DropdownItem value="NY">New York</DropdownItem>
          <DropdownItem value="OH">Ohio</DropdownItem>
          <DropdownItem value="OK">Oklahoma</DropdownItem>
          <DropdownItem value="OR">Oregon</DropdownItem>
          <DropdownItem value="PA">Pennsylvania</DropdownItem>
          <DropdownItem value="PR">Puerto Rico</DropdownItem>
          <DropdownItem value="RI">Rhode Island</DropdownItem>
          <DropdownItem value="SC">South Carolina</DropdownItem>
          <DropdownItem value="SD">South Dakota</DropdownItem>
          <DropdownItem value="TN">Tennessee</DropdownItem>
          <DropdownItem value="TX">Texas</DropdownItem>
          <DropdownItem value="UT">Utah</DropdownItem>
          <DropdownItem value="VA">Virginia</DropdownItem>
          <DropdownItem value="VT">Vermont</DropdownItem>
          <DropdownItem value="WA">Washington</DropdownItem>
          <DropdownItem value="WI">Wisconsin</DropdownItem>
          <DropdownItem value="WV">West Virginia</DropdownItem>
          <DropdownItem value="WY">Wyoming</DropdownItem>
        </DropdownMenu>
      </Dropdown>
            
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
