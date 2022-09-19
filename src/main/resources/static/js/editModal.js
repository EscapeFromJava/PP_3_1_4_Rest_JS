let roles = ""
sendRequest('GET', "/api/roles")
    .then(data => {
        for (const role of data) {
            roles += `<option value="${role["role"]}">${role["role"]}</option>`
        }
    })

const editForm = document.querySelector("#editModalWindow")

on(document, "click", ".btn-info", e => {
    editForm.innerHTML = ""
    const data = e.target.parentNode.parentNode
    const userId = data.firstElementChild.innerHTML
    const url = `/api/users/${userId}`
    sendRequest('GET', url)
        .then(data => {

            let currentUserRoles = []
            for (const role of data["roles"]) {
                currentUserRoles.push(role["role"])
            }

            editForm.innerHTML += `
            <strong>
            <label for="modalEditId" class="form-label mt-3 mb-0">ID</label>
            <input type="text" class="form-control" id="modalEditId" value="${data["id"]}" name="id" readonly/>
            <label for="modalEditFirstName" class="form-label mt-3 mb-0">First Name</label>
            <input type="text" class="form-control" id="modalEditFirstName" value="${data["firstName"]}" name="firstName"/>
            <label for="modalEditLastName" class="form-label mt-3 mb-0">Last Name</label>
            <input type="text" class="form-control" id="modalEditLastName" value="${data["lastName"]}" name="lastName"/>
            <label for="modalEditAge" class="form-label mt-3 mb-0">Age</label>
            <input type="number" class="form-control" id="modalEditAge" value="${data["age"]}" name="age"/>
            <label for="modalEditEmail" class="form-label mt-3 mb-0">Email</label>
            <input type="email" class="form-control" id="modalEditEmail" value="${data["email"]}" name="email" required/>
            <label for="modalEditPassword" class="form-label mt-3 mb-0">Password</label>
            <input type="password" class="form-control" id="modalEditPassword" value="${data["password"]}" name="password" required/>
            <label for="modalEditSelectRole" class="form-label mt-3 mb-0">Role</label>
            <select class="form-select" multiple size="2" id="modalEditSelectRole" name="roles" required>${roles}</select>
            </strong>
            `
        })
})


