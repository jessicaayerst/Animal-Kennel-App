const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/owners`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/owners/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          active: false
        }),
    })
  }
}