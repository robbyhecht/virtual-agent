import APIManager from "./APIManager"

class ToursManager extends APIManager {

  addAndList(newTour) {
    return this.post(newTour).then(() => this.all())
  }

  getAll() {
    return this.allSortedSoonest()
  }




}

// EXPORTS TOURS MANAGER WITH 'THIS' REPRESENTING 'TOURS'
export default new ToursManager("tours")