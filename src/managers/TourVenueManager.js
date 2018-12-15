import APIManager from "./APIManager"

class ToursManager extends APIManager {

  getAll(user) {
    console.log("get all user", user)
    return this.all(user)
  }

  postVenueToTour(venue_id, user_id) {
    let newThing = {venue_id: venue_id, user_id: user_id}
    return this.post(newThing)
  }

  removeVenueFromTour(tour_id) {
    return this.delete(tour_id).then(() => this.all())
  }

}

export default new ToursManager("tour")


