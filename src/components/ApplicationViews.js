import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"
// import APIManager from "../managers/APIManager"
import VenuesList from "./venues/VenuesList"
import VenuesForm from "./venues/VenuesForm"
import VenuesEdit from "./venues/VenuesEdit"
import VenuesManager from "./../managers/VenuesManager"
import HomePage from "./home/Home"


export default class ApplicationViews extends Component {
  
  state = {
    venues: []
  }

  componentDidMount() {

    VenuesManager.getAll()
      .then(allVenues => {
      this.setState({venues: allVenues})
    })

  }


  // Venue Functions
  // addVenue = (obj) =>
  //   APIManager.addCollection("venues", obj).then(venues =>
  //     this.setState({ venues: venues })
  //   )


  addVenue = venues =>
  VenuesManager.addAndList(venues)
    .then(() => VenuesManager.getAll()).then(venues =>
      this.setState({
        venues: venues
      })
    )

  editVenue = (venues, url) =>
    VenuesManager.patchAndListVenue(venues)
      .then(() => VenuesManager.getAll()).then(venues =>
        this.setState({
          venues: venues
        })
      )

    deleteVenue = id => {
      return VenuesManager.removeAndList(id).then(venues =>
        this.setState({
          venues: venues
        })
      )
    }

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