const topBarUserInfo = document.querySelector("#topBarUserInfo")

sendRequest('GET', "/api/user")
    .then(data => {
            topBarUserInfo.innerHTML = `${data["email"]} with roles: ${data["roles"].map(el => el.role)}`
        }
    )