const usersTable = document.querySelector("#usersTable")

sendRequest('GET', "/api/users")
    .then(data => {
            let output = "";
            data.forEach(value => {
                let href = "#delete" + value["id"]
                output += `<tr>
                                <td>${value["id"]}</td>
                                <td>${value["firstName"]}</td>
                                <td>${value["lastName"]}</td>
                                <td>${value["age"]}</td>
                                <td>${value["email"]}</td>
                                <td>${value["roles"].map(el => el.role)}</td>
                                <td>
                                    <button type="button" class="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#editModal" id="btnEdit+${id}">Edit</button>
                                </td>
                                <td>
                                    <button th:href="#delete+${value["id"]}" type="button" class="btn btn-danger text-white" data-bs-toggle="modal">Delete</button>
                                </td>
                            </tr>
            `
            })
            usersTable.innerHTML = output;
        }
    )

