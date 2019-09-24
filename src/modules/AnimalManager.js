const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}?_expand=owner&_expand=location&_expand=employee`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animals?_expand=owner&_expand=location&_expand=employee`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/animals/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          available: false
        }),
    })
  }
}