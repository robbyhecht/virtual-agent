import VenuesManager from "./VenuesManager"
import APIManager from "./APIManager"

class ToursManager extends APIManager {

  getAll(user) {
    console.log("get all user", user)
    return this.allSortedAlpha(user)
  }

  postVenueToTour(venue_id, user_id) {
    let newThing = {venue_id: venue_id, user_id: user_id}
    return this.post(newThing)
  }

}

export default new ToursManager("tour")


