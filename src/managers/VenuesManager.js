import APIManager from "./APIManager"
class VenuesManager extends APIManager {
  getVenues(id) {
    return this.get(id)
  }
  getAll(user) {
    return this.allSortedAlpha(user)
  }
  removeAndList(id, user) {
    return this.delete(id).then(() => this.allSortedAlpha(user))
  }
  addAndList(newVenue) {
      return this.post(newVenue).then(() => this.all())
  }
  patchAndListVenue(venue, url) {
    return this.patch(venue, url).then(() => this.allSortedAlpha())
  }
  // migrateVenue(venue) {
  //   return this.get(venue)
  //   .then(() => fetch("http://localhost:5002/tours"), {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(venue)
  //   }).then(data => data.json())
  // }
}

// EXPORTS VENUES MANAGER WITH 'THIS' REPRESENTING "VENUES"
export default new VenuesManager("venues")