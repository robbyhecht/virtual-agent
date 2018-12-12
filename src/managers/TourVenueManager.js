import VenuesManager from "./VenuesManager"
import APIManager from "./APIManager"

class ToursManager extends APIManager {

  getAll(user) {
    return this.allSortedAlpha(user)
  }

  postVenueToTour(venue_id) {
    return VenuesManager.getVenues(venue_id).then(() => this.post(venue_id))
  }

}

export default new ToursManager("tours")