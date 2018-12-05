// convert to this project

import APIManager from "./APIManager"

class EventsManager extends APIManager {
  getEvents(id) {
    return this.get(id)
  }
  getAll() {
    return this.allSortedSoonest()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
  addAndList(newMessage) {
      return this.post(newMessage).then(() => this.all())
  }
  patchAndListEvent(payload, url) {
    return this.patch(payload, url).then(() => this.allSortedSoonest())
  }
}

export default new EventsManager("events")