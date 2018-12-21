import APIManager from "./APIManager"

class ToursManager extends APIManager {

  getAll(user) {
    console.log("get all user", user)
    return this.all(user)
  }

  postVenueToTour(venueId, user_id) {
    let newTourVenue = {venueId: venueId, user_id: user_id, contacted: false, pending: false, confirmed: false}
    return this.post(newTourVenue)
  }

  removeVenueFromTour(tour_id) {
    return this.delete(tour_id).then(() => this.all())
  }

  updateTourVenue(property, id) {
    return this.patch(property, id)
  }

}

export default new ToursManager("tour")


