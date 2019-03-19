import APIManager from "./APIManager"

class TourManager extends APIManager {

  getAll(user) {
    return this.all(user)
  }

  postVenueToTour(venueId, user_id) {
    let newTourVenue = {venueId: venueId, user_id: user_id, contacted: false, pending: false, confirmed: false}
    return this.post(newTourVenue)
  }

  removeVenueFromTour(tour_id) {
    return this.delete(tour_id).then(() => this.all())
  }

  updateTourVenues(property, id) {
    return this.patch(property, id)
  }

  getByContacted(user) {
    return this.allSortedContacted(user)
  }

  getByPending(user) {
    return this.allSortedPending(user)
  }

  getByConfirmed(user) {
    return this.allSortedConfirmed(user)
  }

  getByNew(user) {
    return this.allSortedNew(user)
  }
  
}

export default new TourManager("tour")


