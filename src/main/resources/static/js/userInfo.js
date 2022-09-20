const usersTable = document.querySelector("#userTableInfo")

sendRequest('GET', "/api/user")
    .then(data => {
            usersTable.innerHTML = `
                        <tr>
                            <td>${data["id"]}</td>
                            <td>${data["firstName"]}</td>
                            <td>${data["lastName"]}</td>
                            <td>${data["age"]}</td>
                            <td>${data["email"]}</td>
                            <td>${data["roles"].map(el => el.role)}</td>
                        </tr>
        `
        }
    )