const remoteURL = "http://localhost:5002"
class APIManager {
    constructor(route) {
        this.route = route
    }

    // FETCH ONE ITEM

  get(id) {
   return fetch(`${remoteURL}/${this.route}/${id}`).then(e => e.json())
  }

  single(id) {
    return fetch(`${remoteURL}/${this.route}/${id}`).then(e => e.json())
  }

    // FETCH A COLLECTION

  all() {
    return fetch(`${remoteURL}/${this.route}`).then(data => data.json())
  }
  
  allSortedSoonest() {
    return fetch(`${remoteURL}/${this.route}?_sort=date&_order=asc`).then(data => data.json());
  }

  allSortedAlpha() {
    return fetch(`${remoteURL}/${this.route}?_sort=name&_order=asc`).then(data => data.json());
  }

  delete(id) {
    return fetch(`${remoteURL}/${this.route}/${id}`, {
        method: "DELETE"
      })
        .then(e => e.json())
        .then(() => fetch(`${remoteURL}/${this.route}`))
        .then(e => e.json())
  }

    // ADD AN ITEM TO A COLLECTION (POST)

  post(newThing) {
    return fetch(`${remoteURL}/${this.route}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newThing)
    }).then(data => data.json())
  }
  
  add(newThing) {
    return fetch(`${remoteURL}/${this.route}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newThing)
    }).then(e => e.json())
      .then(() => this.all(this.route))
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
      .then(e => e.json())
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
      .then(e => e.json())
      .then(() => this.all(this.route))
  }

  // SEARCH FOR SOMETHING IN A COLLECTION

  getSearch(thing, query) {
    return fetch(`${remoteURL}/${thing}?q=${query}`).then(e => e.json())
  }

  // FETCH USERNAME AND PASSWORD

  searchNP(username, password) {
    return fetch(`${remoteURL}/users?username=${username}&password=${password}`)
    .then(data => data.json())
  }

  // FETCH USERNAME ONLY

  searchUsername(username) {
    return fetch(`${remoteURL}/users?username=${username}`)
    .then(data => data.json())
  }

}

export default APIManager




// patch(NewThing, url) {
//   return fetch(`${url}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(NewThing)
//   }).then(data => data.json())
// }

