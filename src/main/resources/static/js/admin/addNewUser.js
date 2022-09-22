const userFirstNameAdd = document.querySelector("#userFirstNameAdd")
const userLastNameAdd = document.querySelector("#userLastNameAdd")
const userAgeAdd = document.querySelector("#userAgeAdd")
const userEmailAdd = document.querySelector("#userEmailAdd")
const userPasswordAdd = document.querySelector("#userPasswordAdd")

const addForm = document.querySelector("#addForm")
addForm.addEventListener('submit', (e) => {
        e.preventDefault()

        let role = [...document.querySelector("#roleToAdd")]
            .filter(option => option.selected)
            .map(option => option.value)

        fetch(urlUsers, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                firstName: userFirstNameAdd.value,
                lastName: userLastNameAdd.value,
                age: userAgeAdd.value,
                email: userEmailAdd.value,
                password: userPasswordAdd.value,
                roles: role
            })
        }).then(response => response.json()).then(response => location.reload())
    }
)
