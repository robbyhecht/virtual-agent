import React, { Component } from 'react'
import { Route } from "react-router-dom"
import VenuesList from "./venues/VenuesList"
import VenuesForm from "./venues/VenuesForm"
import VenuesEdit from "./venues/VenuesEdit"
import VenuesManager from "./../managers/VenuesManager"
import HomePage from "./home/Home"
import ToursList from "./tours/ToursList"
import TourVenueManager from "./../managers/TourVenueManager"


export default class ApplicationViews extends Component {
  
  state = {
    venues: [],
    tour: [],
    tourpage: false
    }

  componentDidMount() {

    VenuesManager.getAll(this.props.currentUser)
      .then(allVenues => {
        console.log("venues", allVenues)
        this.setState({venues: allVenues})
    })

    TourVenueManager.getAll(this.props.currentUser)
    .then(tour => {
      this.setState({tour: tour})})
}

  updateTourButtons = (bool) => {
    this.setState({tourpage: bool})
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

  // FILTER VENUES

  filterVenuesByState = (venueState, user) =>
  VenuesManager.getByState(venueState, user)
  .then(venues =>
    this.setState({
      venues: venues
    })
  )

  filterVenuesByFavorite = (favorite) => {
    VenuesManager.getByFavorite(`yes`, this.props.currentUser)
    .then(venues =>
      this.setState({
        venues: venues
      })
    )
  }

  // TOUR FUNCTIONS

  addVenueToTour = (venue) => {
    TourVenueManager.postVenueToTour(venue, this.props.currentUser)
    .then(() => TourVenueManager.getAll(this.props.currentUser))
    .then(tour => {
      this.setState({
        tour: tour
      })
    })
  }
  
  deleteTourVenue = (tour_id) => {
    return TourVenueManager.removeVenueFromTour(tour_id)
    .then(() => TourVenueManager.getAll(this.props.currentUser))
    .then(tour =>
      this.setState({
        tour: tour
      })
    )
  }

  updateTourVenue = (property, id) => {
    return TourVenueManager.updateTourVenue(property, id)
    .then(() => TourVenueManager.getAll())
    .then (tour =>
      this.setState({
        tour: tour
      })
    )
  }


  render() {

    return (

      // Route everything down as props

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
            filterVenuesByFavorite={this.filterVenuesByFavorite}
            tourpage={this.state.tourpage}
            updateTourButtons={this.updateTourButtons}
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
          console.log("tour state", this.state.tour)
          return <ToursList {...props} 
            tour={this.state.tour}
            venues={this.state.venues}
            deleteTour={this.deleteTour}
            tourpage={this.state.tourpage}
            updateTourButtons={this.updateTourButtons}
            deleteTourVenue={this.deleteTourVenue}
            updateTourVenue={this.updateTourVenue}
            />
        }} />

    </React.Fragment>
    )
  }
}