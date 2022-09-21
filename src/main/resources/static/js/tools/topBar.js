const topBar = document.querySelector("#topBar")

function sendRequest(method, url, body = null) {
    return fetch(url).then(response => {
        return response.json()
    })
}

sendRequest('GET', "/api/user")
    .then(data => {
            topBar.innerHTML = `${data["email"]} with roles: ${data["roles"].map(el => el.role)}`
        }
    )