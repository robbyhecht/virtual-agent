import React, { Component } from 'react'
import { Route, Link, Redirect } from "react-router-dom"
import APIManager from "../managers/APIManager"
import VenuesList from "./venues/VenuesList"
import VenuesForm from "./venues/VenuesForm"
import VenuesEdit from "./venues/VenuesEdit"
import VenuesManager from "./../managers/VenuesManager"
import HomePage from "./home/Home"
import ToursList from "./tours/ToursList"
import ToursForm from "./tours/ToursForm"
import ToursManager from './../managers/ToursManager'
import TourVenueManager from "./../managers/TourVenueManager"


export default class ApplicationViews extends Component {
  
  state = {
    venues: [],
    tours: []
    }

  componentDidMount() {

    VenuesManager.getAll(this.props.currentUser)
      .then(allVenues => {
        console.log("venues", allVenues)

      this.setState({venues: allVenues})
    })

    ToursManager.getAll(this.props.currentUser)
    .then(allTours => {
    this.setState({tours: allTours})
    })
}


  // VENUE FUNCTIONS

  
  
  addVenue = venues =>
  VenuesManager.addAndList(venues)
    .then(() => VenuesManager.getAll(this.props.currentUser))
    .then(venues => 
    
      this.setState({
        venues: venues
      })
    )

  addVenueToTour = (venue_id) => {
  TourVenueManager.postVenueToTour(venue_id)
    .then(() => TourVenueManager.getAll(this.props.currentUser))
    .then(tour => 
      this.setState({
        tour: tour
      })
    )
  }

  deleteVenue = (id, user) => {
    return VenuesManager.removeAndList(id, user)
    .then(venues =>
        this.setState({
          venues: venues
        })
      )
    }

  editVenue = (venues, url) =>
  VenuesManager.patchAndListVenue(venues, url)
    .then(() => VenuesManager.getAll(this.props.currentUser)).then(venues =>
      this.setState({
        venues: venues
      })
    )

  // FILTER VENUES BY STATE

  filterVenuesByState = (venueState, user) =>
  VenuesManager.getByState(venueState, user)
  // .then(() => VenuesManager.getAll(this.props.currentUser))
  .then(venues =>
    this.setState({
      venues: venues
    })
  )

  // TOUR FUNCTIONS

  addTour = (tour) =>
  ToursManager.addAndList(tour)
    .then(tours => {
      console.log("tours", tours)
      this.setState({
        tours: tours
      })
    })


  deleteTour = (id, user) => {
    return ToursManager.removeAndList(id, user).then(tours =>
      this.setState({
        tours: tours
      })
    )
  }

    editTour = (tours, url) =>
    ToursManager.patchAndListTour(tours, url)
      .then(() => ToursManager.getAll(this.props.currentUser)).then(tours =>
        this.setState({
          tours: tours
        })
      )

  render() {

    return (

      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <HomePage {...props} />
        }} />

        <Route exact path="/venues" render={(props) => {
          return <VenuesList {...props}
            addVenue={this.addVenue}
            editVenue={this.editVenue}
            deleteVenue={this.deleteVenue}
            addVenueToTour={this.addVenueToTour}
            venues={this.state.venues}
            tours={this.state.tours}
            currentUser={this.props.currentUser}
            filterVenuesByState={this.filterVenuesByState}
            />
        }} />
        
        <Route path="/venues/edit/:venueId(\d+)"
          render={(props) => {
              return <VenuesEdit {...props}
                venues={this.state.venues}
                editVenue={this.editVenue} />
          }} />

        <Route exact path="/venues/new" render={props => {
          return <VenuesForm {...props} addVenue={this.addVenue} />
        }}  />

        <Route exact path="/tours" render={(props) => {
          return <ToursList {...props} 
            tours={this.state.tours}
            deleteTour={this.deleteTour}
            addVenueToTour={this.addVenueToTour}
            />
        }} />

        <Route exact path="/tours/new" render={props => {
          return <ToursForm {...props}
          addTour={this.addTour}
          />
        }}  />

    </React.Fragment>
    )
  }
}