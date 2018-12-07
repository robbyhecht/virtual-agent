import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"
import ApiManager from "./modules/ApiManager"
import VenuesList from "./venues/VenuesList"
import VenuesForm from "./venues/VenuesForm"
import VenuesEdit from "./venues/VenuesEdit"
// import VenuesManager from "./../managers/VenuesManager"


export default class ApplicationViews extends Component {
  
  state = {
    venues: []
  }

  componentDidMount() {
    const _state = {}
    ApiManager.all("venues")
      .then(venues => (_state.venues = venues))
      .then(() => {
        this.setState(_state)
      })
  }

  // Venue Functions
  addVenue = (obj) =>
    ApiManager.add("venues", obj).then(venues =>
      this.setState({ venues: venues })
    )

  editVenue = (id, obj) =>
    ApiManager.edit("venues", id, obj).then(venues =>
      this.setState({ venues: venues })
    )

  // deleteVenue = id =>
  //   ApiManager.delete(id).then(venues =>
  //     this.setState({ venues: venues })
  //   )

  deleteVenue = (resource, id) => {
    return ApiManager.delete(resource, id).then(venues =>
      this.setState({ venues: venues })
    )
  }


  render() {
    return (
    <React.Fragment>
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

      {/* <Route exact path="/venues" render={props => {
        if (this.isAuthenticated()) {
          return <VenuesList {...props}
            venues={this.state.venues}
            deleteVenues={this.deleteVenues} />
        } else {
          return <Redirect to="/login" />
        }
      }}
        /> */}
      <Route exact path="/venues/new" render={props => {
  // if (this.isAuthenticated()) {
        return <VenuesForm {...props} addVenue={this.addVenue} />
        // } else {
        //   return <Redirect to="/login" />
        // }
      }}
/>
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