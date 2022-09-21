const editModal = new bootstrap.Modal(document.getElementById('editModal'))

const editForm = document.querySelector('#editForm')

const userId = document.getElementById('idEdit')
const userFirstName = document.getElementById('firstNameEdit')
const userLastName = document.getElementById('lastNameEdit')
const userAge = document.getElementById('ageEdit')
const userEmail = document.getElementById('emailEdit')
const userPassword = document.getElementById('passwordEdit')

const userSelectRoles = document.getElementById('rolesEdit')

on(document, "click", ".btn-info", e => {
    const currentUserId = e.target.parentNode.parentNode.firstElementChild.innerHTML
    sendRequest('GET', "/api/users/".concat(currentUserId))
        .then(data => {
                userId.value = data["id"]
                userFirstName.value = data["firstName"]
                userLastName.value = data["lastName"]
                userAge.value = data["age"]
                userEmail.value = data["email"]
                userPassword.value = data["password"]

                const userRoles = data["roles"].map(role => role["role"])

                let selectOptionRoles = ``
                sendRequest('GET', "/api/roles")
                    .then(data => {
                            let allRoles = data.map(el => el["role"])
                            for (const role of allRoles) {
                                if (userRoles.includes(role)) {
                                    selectOptionRoles += `<option value="${role}" selected>${role}</option>`
                                } else {
                                    selectOptionRoles += `<option value="${role}">${role}</option>`
                                }
                            }
                            userSelectRoles.innerHTML = selectOptionRoles
                        }
                    )
                editModal.show()
            }
        )
})


editForm.addEventListener('submit', (e) => {
        e.preventDefault()

        let role = [...document.getElementById("rolesEdit")]
            .filter(option => option.selected)
            .map(option => option.value)

        fetch(url, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                id: userId.value,
                firstName: userFirstName.value,
                lastName: userLastName.value,
                age: userAge.value,
                email: userEmail.value,
                password: userPassword.value,
                roles: role
            })
        }).then(response => response.json()).then(response => location.reload())
        editModal.hide()
    }
)