const userFirstNameAdd = document.getElementById('userFirstNameAdd')
const userLastNameAdd = document.getElementById('userLastNameAdd')
const userAgeAdd = document.getElementById('userAgeAdd')
const userEmailAdd = document.getElementById('userEmailAdd')
const userPasswordAdd = document.getElementById('userPasswordAdd')

const addForm = document.querySelector('#addForm')
addForm.addEventListener('submit', (e) => {
        e.preventDefault()

        let role = [...document.getElementById("roleToAdd")]
            .filter(option => option.selected)
            .map(option => option.value)

        fetch(url, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
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
