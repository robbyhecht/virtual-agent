// SET FETCH URL TO VARIABLE
const remoteURL = "http://localhost:5002"

export default Object.create(null, {

  // FETCH ONE ITEM
  single: {
    value: function(resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json())
    }
  },

  // FETCH A COLLECTION
  all: {
    value: function(resource) {
      return fetch(`${remoteURL}/${resource}`).then(e => e.json())
    }
  },

  // DELETE AN ITEM
  delete: {
    value: function(resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`, {
        method: "DELETE"
      })
        .then(e => e.json())
        .then(() => this.all(resource))
    }
  },

  // ADD AN ITEM TO A COLLECTION
  add: {
    value: function(resource, newObject) {
      return fetch(`${remoteURL}/${resource}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newObject)
      }).then(e => e.json())
        .then(() => this.all(resource))
    }
  },

  // EDIT AN ITEM
  edit: {
    value: function(resource, id, newObject) {
      return fetch(`${remoteURL}/${resource}/${id}`, {
        method: "PUT",
        body: JSON.stringify(newObject),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(e => e.json())
        .then(() => this.all(resource))
    }
  },

  // EDIT MORE SPECIFICALLY
  patch: {
    value: function(resource, id, newObject) {
      return fetch(`${remoteURL}/${resource}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(newObject),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(e => e.json())
        .then(() => this.all(resource))
    }
  },

// SEARCH A COLLECTION
  getSearch: {
    value: function(resource, query) {
      return fetch(`${remoteURL}/${resource}?q=${query}`).then(e => e.json())
    }
  },

  // FETCH USERNAME AND PASSWORD
  searchNP: {
    value: function(username, password) {
      return fetch(
        `${remoteURL}/users?username=${username}&password=${password}`
      ).then(e => e.json())
    }
  },

  // FETCH USERNAME ONLY
  searchUsername: {
    value: function(username) {
      return fetch(`${remoteURL}/users?username=${username}`).then(e =>
        e.json()
      )
    }
  },

  // FETCH A COLLECTION AND SORT BY ASCENDING DATE
  sortSoonest: {
    value: function(resource) {
      return fetch (`${remoteURL}/${resource}?_sort=date&_order=asc`).then(e => e.json())
    }
  },

  // FETCH A COLLECTION AND SORT BY NAME ASCENDING
  sortAlpha: {
    value: function(resource) {
      return fetch (`${remoteURL}/${resource}?_sort=name&_order=asc`).then(e => e.json())
    }
  }

})




//PUT means that you MUST send the entire entity details to a resource, whereas with PATCH, you only send the data that you wish to change aka the delta.







  // addJoiner: {
  //   value: function(resource, newObject, resource2, newObject2) {
  //     return fetch(`${remoteURL}/${resource}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(newObject)
  //     })
  //       .then(e => e.json())
  //       .then(response => {
  //         return fetch(`${remoteURL}/${resource2}`, {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json"
  //           },
  //           body: JSON.stringify({
  //             ownerId: newObject2.ownerId,
  //             animalId: response.id
  //           })
  //         }).then(e => e.json())
  //       })
  //       .then(() => this.all(resource))
  //   }
  // },