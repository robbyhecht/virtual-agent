import React, { Component } from 'react'
import { Route } from "react-router-dom"
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
    tour: [],
    tourpage: false
    }

  componentDidMount() {

    VenuesManager.getAll(this.props.currentUser)
      .then(allVenues => {
        console.log("venues", allVenues)
        this.setState({venues: allVenues})
    })

    // ToursManager.getAll(this.props.currentUser)
    // .then(allTours => {
    // this.setState({tours: allTours})
    // })

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

  // FILTER VENUES BY STATE

  filterVenuesByState = (venueState, user) =>
  VenuesManager.getByState(venueState, user)
  .then(venues =>
    this.setState({
      venues: venues
    })
  )

  // TOUR FUNCTIONS

  // ADD TO SINGLE TOUR PAGE

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



  // MULTIPLE TOURS

  addTour = (tour) =>
  ToursManager.addAndList(tour)
    .then(tours => {
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