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


  // Venue Functions
  // addVenue = (obj) =>
  //   APIManager.addCollection("venues", obj).then(venues =>
  //     this.setState({ venues: venues })
  //   )


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

  filterVenueStates = (states, user) =>
  VenuesManager.getByState(states, user)
  .then(() => VenuesManager.getAll(this.props.currentUser)).then(venues =>
    this.setState({
      venues: venues
    })
  )

  addTour = tours =>
  ToursManager.addAndList(tours)
    .then(() => ToursManager.getAll(this.props.currentUser))
    .then(tours =>
      this.setState({
        tours: tours
      })
    )

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

    // addTour = tours =>
    // ToursManager.addAndList(tours)
    //   .then(() => ToursManager.getAll()).then(tours =>
    //     this.setState({
    //       tours: tours
    //     })
    //   )

    // deleteTour = id => {
    //   console.log("id", id)
    //   return ToursManager.removeAndList(id).then(tours =>
    //     this.setState({
    //       tours: tours
    //     })
    //   )
    // }

  // editVenue = (id, obj) =>
  //   APIManager.edit("venues", id, obj).then(venues =>
  //     this.setState({ venues: venues })
  //   )



  // deleteVenue = id =>
  //   APIManager.delete(id).then(venues =>
  //     this.setState({ venues: venues })
  //   )

  // deleteVenue = (resource, id) => {
  //   APIManager.delete(resource, id).then(venues =>
  //     this.setState({ venues: venues })
  //   )
  // }


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
            venues={this.state.venues}
            currentUser={this.props.currentUser}
            filterVenueStates={this.filterVenueStates}
            />
        }} />
        
        <Route path="/venues/edit/:venueId(\d+)"
          render={(props) => {
            // if (this.isAuthenticated()) {
              return <VenuesEdit {...props}
                venues={this.state.venues}
                editVenue={this.editVenue} />
            // } else {
            //   return <Redirect to="/login" />
            // }
          }} />

        <Route exact path="/venues/new" render={props => {
    // if (this.isAuthenticated()) {
          return <VenuesForm {...props} addVenue={this.addVenue} />
          // } else {
          //   return <Redirect to="/login" />
          // }
        }}  />

        <Route exact path="/tours" render={(props) => {
          return <ToursList {...props} 
            tours={this.state.tours}
            deleteTour={this.deleteTour} />
        }} />

        <Route exact path="/tours/new" render={props => {
    // if (this.isAuthenticated()) {
          return <ToursForm {...props}
          addTour={this.addTour}
          />
          // } else {
          //   return <Redirect to="/login" />
          // }
        }}  />

    </React.Fragment>
    )
  }
}

    // addVenue = venues => {
    //   console.log("Hi")
    //   return new Promise((resolve, reject) => {
    //     VenuesManager.addAndList(venues)
    //       .then(() => VenuesManager.getAll()).then(venues =>
    //         this.setState({
    //           venues: venues
    //         }, () => {
    //           resolve()
    //         })
    //       );
    //   })
    // }
  
    // editVenues = (venues, url) => {
    //   return new Promise((resolve, reject) => {
    //     VenuesManager.patchAndListEvent(venues, url)
    //       .then(() => VenuesManager.getAll())
    //       .then(venues =>
    //         this.setState({
    //           venues: venues
    //         }, () => {
    //           resolve()
    //         })
    //       );
    //   })
    // }
  
    // deleteVenues = (oldFriend, user) => {
    //   return VenuesManager.removeAndList(oldFriend, user).then(venues =>
    //     this.setState({
    //       venues: venues
    //     })
    //   );
    // };
  
//   render() {
//     return(
//       <React.Fragment>

        




//         {/* <Route path="/venues/:venuesId(\d+)" render={(props) => {
//           if (this.isAuthenticated()) {
//             return <VenuesDetail {...props}
//               venues={this.state.venues}
//               deleteVenues={this.deleteVenues}
//             />
//           } else {
//             return < Redirect to="/login" />
//           }
//         }} /> */}

//       </React.Fragment>
//     )
//   }
// }