import React, { Component } from 'react'
import VenueCard from "./VenueCard"
import "./Venues.css"
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'


export default class VenuesList extends Component {

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      page: "venue",
    }
  }

  // Sets the state of 'tourpage' to 'false', letting VenueCard know to assign venue page buttons on card display. in TourList, this same function mounts as 'true'
  componentDidMount () {
    this.props.updateTourButtons(false)
  }


  // Toggle function relates to the dropdown menu for venueState selection
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }


  // FILTER FUNCTIONS
  
  // filters venues by geographical state using json fetch address extension 
  handleClickVenue = choice => {
    this.props.filterVenuesByState(choice, this.props.currentUser)
  }

  // filters by 'favorite' property
  handleClickFavorite() {
    this.props.filterVenuesByFavorite()
  }

  // filters by 'havePlayed' property
  handleClickHavePlayed() {
    this.props.filterVenuesByHavePlayed()
  }

  // reloads the page to remove filtering
  removeFilter = () => {
    window.location.reload()
  }


  render() {

    // tells venues page which venues to display based on filters
    let showVenues = this.props.venues // Default to showing all of the venues
    if (this.props.useFilter) { // BUT if a filter is being used...
      showVenues = this.props.venuesToShow // ...then these are the venues to display
    }

    return (

      <React.Fragment>

        <div id="venuesTop">

          <h1 id="venuesHeader">VENUES</h1>

          <section id="venueButtons">

            {/* sends the user to the venues/new address */}

            <Button
              id="newVenueButton"
              size="large"
              className="btn"
              onClick={() => {
                this.props.history.push("/venues/new");
              }}>
              Add New Venue
            </Button>

            {/* calls the geographical state filter method */}
            <Dropdown
            isOpen={this.state.dropdownOpen} toggle={this.toggle}
            name="venueState" id="venueState" value="venueState"
            >
              <DropdownToggle id="stateButton">
                Filter By State
              </DropdownToggle>
              <DropdownMenu
              modifiers={{
                setMaxHeight: {
                  enabled: true,
                  order: 890,
                  fn: (data) => {
                    return {
                      ...data,
                      styles: {
                        ...data.styles,
                        overflow: 'auto',
                        maxHeight: 800,
                      },
                    };
                  },
                },
              }}
              >
                <DropdownItem header>CHOOSE A STATE</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => this.handleClickVenue("AK")}>Alaska</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("AL")}>Alabama</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("AR")}>Arkansas</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("AZ")}>Arizona</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("CA")}>California</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("CO")}>Colorado</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("CT")}>Connecticut</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("DC")}>District of Columbia</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("DE")}>Delaware</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("FL")}>Florida</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("GA")}>Georgia</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("HI")}>Hawaii</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("IA")}>Iowa</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("ID")}>Idaho</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("IL")}>Illinois</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("IN")}>Indiana</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("KS")}>Kansas</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("KY")}>Kentucky</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("LA")}>Louisiana</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("MA")}>Massachusetts</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("MD")}>Maryland</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("ME")}>Maine</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("MI")}>Michigan</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("MN")}>Minnesota</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("MO")}>Missouri</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("MS")}>Mississippi</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("MT")}>Montana</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("NC")}>North Carolina</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("ND")}>North Dakota</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("NE")}>Nebraska</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("NH")}>New Hampshire</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("NJ")}>New Jersey</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("NM")}>New Mexico</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("NV")}>Nevada</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("NY")}>New York</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("OH")}>Ohio</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("OK")}>Oklahoma</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("OR")}>Oregon</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("PA")}>Pennsylvania</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("PR")}>Puerto Rico</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("RI")}>Rhode Island</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("SC")}>South Carolina</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("SD")}>South Dakota</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("TN")}>Tennessee</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("TX")}>Texas</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("UT")}>Utah</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("VA")}>Virginia</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("VT")}>Vermont</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("WA")}>Washington</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("WI")}>Wisconsin</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("WV")}>West Virginia</DropdownItem>
                <DropdownItem onClick={() => this.handleClickVenue("WY")}>Wyoming</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* Calls the 'favorite' filter method */}
            <Button
              id="favoriteButton"
              size="large"
              className="btn"
              onClick={() => {
                this.handleClickFavorite()
              }}>
              Filter By Favorites
            </Button>

              {/* Calls the 'havePlayed' filter method */}
            <Button
              id="havePlayedButton"
              size="large"
              className="btn"
              onClick={() => {
                this.handleClickHavePlayed()
              }}>
              Filter By Played
            </Button>
            
              {/* calls the filter removal method */}
            <Button
              id="removeFilterButton"
              size="large"
              className="btn"
              onClick={() => {
                this.removeFilter()
              }}>
              Remove Venues Filter
            </Button>

          </section>
        </div>

          {/* maps over the 'venues' array and sends the information to VenueCard to make a card for each venue. */}
          <article className="venuesList">
            {
              showVenues.map(venue => {
                return <VenueCard page={this.state.page} key={venue.id} venue={venue} {...this.props} />
              } ) 
            }
          </article>

      </React.Fragment>
    )
  }
}