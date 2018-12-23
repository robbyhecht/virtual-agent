const remoteURL = "http://localhost:5002"
export default class APIManager {
    constructor(route) {
        this.route = route
    }

    // FETCH ONE ITEM

  get(id) {
    return fetch(`${remoteURL}/${this.route}/${id}`).then(data => data.json())
  }

    // FETCH A COLLECTION

  all() {
    return fetch(`${remoteURL}/${this.route}`).then(data => data.json())
  }

  allSortedAlpha(user) {
    return fetch(`${remoteURL}/${this.route}?user_id=${user}&_sort=name&_order=asc`).then(data => data.json());
  }

  allSortedStates(venueState, user) {
    return fetch(`${remoteURL}/${this.route}?user_id=${user}&venueState=${venueState}&_sort=name&_order=asc`).then(data => data.json());
  }

  allSortedFavorites(favorite, user) {
    return fetch(`${remoteURL}/${this.route}?user_id=${user}&favorite=${favorite}&_sort=name&_order=asc`).then(data => data.json());
  }

  allSortedHavePlayed(havePlayed, user) {
    return fetch(`${remoteURL}/${this.route}?user_id=${user}&havePlayed=${havePlayed}&_sort=name&_order=asc`).then(data => data.json());
  }

  allSortedContacted(user) {
    return fetch(`${remoteURL}/${this.route}?user_id=${user}&contacted=true`).then(data => data.json());
  }

  allSortedPending(user) {
    return fetch(`${remoteURL}/${this.route}?user_id=${user}&pending=true`).then(data => data.json());
  }

  allSortedConfirmed(user) {
    return fetch(`${remoteURL}/${this.route}?user_id=${user}&confirmed=true`).then(data => data.json());
  }

  allSortedNew(user) {
    return fetch(`${remoteURL}/${this.route}?user_id=${user}&contacted=false&pending=false&confirmed=false`).then(data => data.json());
  }

  delete(id) {
    return fetch(`${remoteURL}/${this.route}/${id}`, {
        method: "DELETE"
      })
        .then(data => data.json())
        .then(() => fetch(`${remoteURL}/${this.route}`))
        .then(data => data.json())
  }

    // ADD AN ITEM TO A COLLECTION (POST)

  post(newThing) {    
    return fetch(`${remoteURL}/${this.route}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newThing)
    })
    .then(data => data.json())
  }
  
    // MAKE A CHANGE TO A COLLECTION (PATCH)

  patch(NewThing, id) {
    return fetch(`${remoteURL}/${this.route}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(NewThing),
    }).then(data => data.json())
  }

  patchReturn(newThing, id) {
    return fetch(`${remoteURL}/${this.route}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newThing),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(data => data.json())
      .then(() => this.all(this.route))
  }

  // EDIT AN ITEM (PUT)

  edit(id, newThing) {
    return fetch(`${remoteURL}/${this.route}/${id}`, {
      method: "PUT",
      body: JSON.stringify(newThing),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(() => this.all(this.route))
  }

  // SEARCH FOR SOMETHING IN A COLLECTION

  getSearch(thing, query) {
    return fetch(`${remoteURL}/${thing}?q=${query}`).then(data => data.json())
  }

  // FETCH USERNAME AND PASSWORD

  static searchNP(username, password) {
    return fetch(`${remoteURL}/users?username=${username}&password=${password}`)
    .then(e => e.json())
  }

  // FETCH USERNAME ONLY

  static searchUsername(username) {
    return fetch(`${remoteURL}/users?username=${username}`)
    .then(data => data.json())
  }

}