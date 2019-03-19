import React, { Component } from 'react'
import { Route } from "react-router-dom"
import VenuesList from "./venues/VenuesList"
import VenuesForm from "./venues/VenuesForm"
import VenuesEdit from "./venues/VenuesEdit"
import VenuesManager from "./../managers/VenuesManager"
import HomePage from "./home/Home"
import TourList from "./tours/TourList"
import TourVenueManager from "./../managers/TourVenueManager"


export default class ApplicationViews extends Component {
  
  state = {
    venues: [],
    tour: [],
    tourpage: false,
    // venueWithTour: []
    }

  componentDidMount() {

    // Chains fetches to set state all at once via a variable called stateSet

    let stateSet = {}
    TourVenueManager.getAll(this.props.currentUser)
    .then(tour => (stateSet.tour = tour))
    .then(() => VenuesManager.getAll(this.props.currentUser))
    .then(allVenues => (stateSet.venues = allVenues))
    .then(() => this.setState(stateSet))
  }

  // This method will be used via TourList and VenuesList to tell VenueCard whether to assign Tour page buttons or Venues page buttons

  updateTourButtons = (bool) => {
    this.setState({tourpage: bool})
  }


  // VENUE FUNCTIONS

  // Add a venue to VenuesList - called in VenuesForm

  addVenue = venues =>
  VenuesManager.addAndList(venues)
    .then(() => VenuesManager.getAll(this.props.currentUser))
    .then(venues => 
      this.setState({
        venues: venues
      })
    )

  // Delete a venue from VenuesList - called in VenuesCard on delete button click

  deleteVenue = (id, user) => {
    return VenuesManager.removeAndList(id, user)
    .then(venues =>
        this.setState({
          venues: venues
        })
      )
    }

  // Edit a venue on VenuesList - called in VenuesEdit

  editVenue = (venues, url) =>
  VenuesManager.patchAndListVenue(venues, url)
    .then(() => VenuesManager.getAll(this.props.currentUser)).then(venues =>
      this.setState({
        venues: venues
      })
    )


  // FILTER VENUES

  // Used to show only venue objects with specific "venueState" value - called in VenuesList

  filterVenuesByState = (venueState, user) =>
  VenuesManager.getByState(venueState, user)
  .then(venues =>
    this.setState({
      venues: venues
    })
  )

  // Used to show only venue objects with specific "favorite" value - called in VenuesList

  filterVenuesByFavorite = (favorite) => {
    VenuesManager.getByFavorite(`yes`, this.props.currentUser)
    .then(venues =>
      this.setState({
        venues: venues
      })
    )
  }

  filterVenuesByHavePlayed = (havePlayed) => {
    VenuesManager.getByHavePlayed(`yes`, this.props.currentUser)
    .then(venues =>
      this.setState({
        venues: venues
      })
    )
  }

  // TOUR FUNCTIONS

  // Adds a venue to the TourList page - called in VenueCard

  addVenueToTour = (venue) => {
    TourVenueManager.postVenueToTour(venue, this.props.currentUser)
    .then(() => TourVenueManager.getAll(this.props.currentUser))
    .then(tour => {
      this.setState({
        tour: tour
      })
    })
  }

  // Removes a venue object from the TourList page - called in VenueCard
  
  removeTourVenue = (tour_id) => {
    return TourVenueManager.removeVenueFromTour(tour_id)
    .then(() => TourVenueManager.getAll(this.props.currentUser))
    .then(tour =>
      this.setState({
        tour: tour
      })
    )
  }

  // Changes the boolean state in a tour object on the "contacted", "pending" and "confirmed" properties - called in VenueCard

  updateTourVenue = (property, id) => {
    return TourVenueManager.updateTourVenues(property, id)
    .then(() => TourVenueManager.getAll())
    .then (tour =>
      this.setState({
        tour: tour
      })
    )
  }


  // TOUR FILTERS

  // Shows only those venues with the "contacted" property set to "true" - called in TourList inside handleClickContacted method

  filterVenuesByContacted = () => {
    TourVenueManager.getByContacted(this.props.currentUser)
    .then(tour =>
      this.setState({
        tour: tour
      })
    )
  }

  // Shows only those venues with the "pending" property set to "true" - called in TourList inside handleClickPending method

  filterVenuesByPending = () => {
    TourVenueManager.getByPending(this.props.currentUser)
    .then(tour =>
      this.setState({
        tour: tour
      })
    )
  }

  // Shows only those venues with the "confirmed" property set to "true" - called in TourList inside handleClickConfirmed method

  filterVenuesByConfirmed = () => {
    TourVenueManager.getByConfirmed(this.props.currentUser)
    .then(tour =>
      this.setState({
        tour: tour
      })
    )
  }

  filterVenuesByNew = () => {
    TourVenueManager.getByNew(this.props.currentUser)
    .then(tour =>
      this.setState({
        tour: tour
      })
    )
  }

  render() {

    return (


      //  Set http extension route for each component, and send fetched state arrays down as props

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
            venueWithTour={this.state.venueWithTour}
            tour={this.state.tour}
            currentUser={this.props.currentUser}
            filterVenuesByState={this.filterVenuesByState}
            filterVenuesByFavorite={this.filterVenuesByFavorite}
            filterVenuesByHavePlayed={this.filterVenuesByHavePlayed}
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

        <Route exact path="/tour" render={(props) => {
          return <TourList {...props} 
            tour={this.state.tour}
            venues={this.state.venues}
            deleteTour={this.deleteTour}
            tourpage={this.state.tourpage}
            updateTourButtons={this.updateTourButtons}
            removeTourVenue={this.removeTourVenue}
            updateTourVenue={this.updateTourVenue}
            filterVenuesByContacted={this.filterVenuesByContacted}
            filterVenuesByPending={this.filterVenuesByPending}
            filterVenuesByConfirmed={this.filterVenuesByConfirmed}
            filterVenuesByNew={this.filterVenuesByNew}
            />
        }} />

    </React.Fragment>
    )
  }
}


// VenuesManager.getAll(this.props.currentUser)
// .then(allVenues => {
//   this.setState({venues: allVenues})
// })

// TourVenueManager.getAll(this.props.currentUser)
// .then(tour => {
// this.setState({tour: tour})})

// ---

  // checkStatus = () => {
  //  this.tour.map(tourVenue => {
  //     let venue = this.props.venues.find(venue => venue.id === tourVenue.venueId).then(() => console.log(venue))})
  // }

  // checkStatus = (venueId) => {
  //   let venueInTour = TourVenueManager.getAll(this.props.currentUser).find(tour => tour.venueId === venueId)
  //   .then(() => 
  //   console.log(venueInTour))
  // }

  // grab the venue

  // checkStatus = (venue) => {
  //   let tourVenues = TourVenueManager.getAll(this.props.currentUser)
  //   let thisVenue = VenuesManager.getVenue(venue)
  //   let bool = thisVenue.find(venue => venue.id === tourVenues.venueId) ? true : false
  //   console.log(bool)
  //   }


  // .map(tourVenue => {
  //   this.props.venueId.find(venue => venue.id === tourVenue.venueId)

  // get venue id from venue
  // check against venue ids in tour venues
  // if venue id is included, return true and block button creation