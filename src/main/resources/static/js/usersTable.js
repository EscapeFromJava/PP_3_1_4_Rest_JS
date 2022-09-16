const usersTable = document.querySelector("#usersTable")

sendRequest('GET', "/api/users")
    .then(data => {
            let output = "";
            data.forEach(value => {
                output += `<tr>
                            <td>${value["id"]}</td>
                            <td>${value["firstName"]}</td>
                            <td>${value["lastName"]}</td>
                            <td>${value["age"]}</td>
                            <td>${value["email"]}</td>
                            <td>${value["roles"].map(el => el.role)}</td>
                            <td><button th:href="#edit+${value["id"]}" type="button" class="btn btn-info text-white" data-bs-toggle="modal">Edit</button></td>
                            <td><button th:href="#delete+${value["id"]}" type="button" class="btn btn-danger text-white" data-bs-toggle="modal">Delete</button></td>
                            </tr>`
            })
            usersTable.innerHTML = output;
        }
    )
