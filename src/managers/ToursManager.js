import APIManager from "./APIManager"
import VenuesManager from "./VenuesManager"

class ToursManager extends APIManager {

  addAndList(newTour) {
    return this.post(newTour).then(() => this.allSortedAlpha(newTour.user_id))
  }

  getAll(user) {
    return this.allSortedAlpha(user)
  }

  postVenueToTour(venue) {
    return VenuesManager.getVenues(venue).then(() => this.post(venue))
  }

  removeAndList(id, user) {
    return this.delete(id).then(() => this.allSortedAlpha(user))
  }

  patchAndListTour(tour, url) {
    return this.patch(tour, url).then(() => this.allSortedAlpha())
  }

  getVenues(id) {
    return this.get(id)
  }


}

// EXPORTS TOURS MANAGER WITH 'THIS' REPRESENTING 'TOURS'
export default new ToursManager("tours")