import APIManager from "./APIManager"
class VenuesManager extends APIManager {
  getVenues(id) {
    return this.get(id)
  }
  getAll() {
    return this.allSortedAlpha()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
  addAndList(newVenue) {
      return this.post(newVenue).then(() => this.all())
  }
  patchAndListVenue(venue, url) {
    return this.patch(venue, url).then(() => this.allSortedAlpha())
  }
}

// EXPORTS VENUES MANAGER WITH 'THIS' REPRESENTING "VENUES"
export default new VenuesManager("venues")