// import APIManager from "./APIManagerOrig"
import ApiManager from "../components/modules/ApiManager"

class VenuesManager extends ApiManager {
  getVenues(id) {
    return this.get(id)
  }
  getAll() {
    return this.allSortedAlpha()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
  addAndList(newMessage) {
      return this.post(newMessage).then(() => this.all())
  }
  patchAndListVenue(payload, url) {
    return this.patch(payload, url).then(() => this.allSortedAlpha())
  }
}

export default new VenuesManager("venues")