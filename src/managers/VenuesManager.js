import APIManager from "./APIManager"
class VenuesManager extends APIManager {
  getVenue(id) {
    return this.get(id)
  }

  getAll(user) {
    return this.allSortedAlpha(user)
  }

  getByState(venState, user) {
    return this.allSortedStates(venState, user)
  }

  getByFavorite(favorite, user) {
    return this.allSortedFavorites(favorite, user)
  }

  getByHavePlayed(havePlayed, user) {
    return this.allSortedHavePlayed(havePlayed, user)
  }

  removeAndList(id, user) {
    return this.delete(id).then(() => this.allSortedAlpha(user))
  }

  addAndList(newVenue, id) {
      return this.post(newVenue).then(() => this.all(id))
  }

  patchAndListVenue(venue, url) {
    return this.patch(venue, url).then(() => this.allSortedAlpha())
  }

  queryExistingVenue(user) {
    return this.queryVenueId(user)
  }
}

// EXPORTS VENUES MANAGER WITH 'THIS' REPRESENTING "VENUES"
export default new VenuesManager("venues")