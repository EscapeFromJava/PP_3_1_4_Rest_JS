const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'))

const deleteForm = document.querySelector('#deleteForm')

const userIdDelete = document.getElementById('idDelete')
const userNameDelete = document.getElementById('nameDelete')
const userSurnameDelete = document.getElementById('surnameDelete')
const userUsernameDelete = document.getElementById('usernameDelete')

on(document, "click", ".btn-danger", e => {

    const data = e.target.parentNode.parentNode
    const idForm = data.firstElementChild.innerHTML
    const nameForm = data.children[1].innerHTML
    const surnameForm = data.children[2].innerHTML
    const usernameForm = data.children[3].innerHTML
    userIdDelete.value = idForm
    userNameDelete.value = nameForm
    userSurnameDelete.value = surnameForm
    userUsernameDelete.value = usernameForm
    deleteModal.show()
})

deleteForm.addEventListener('submit', (e) => {

        e.preventDefault()
        const idToDelete = userIdDelete.value

        fetch(url + idToDelete, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({})
        }).then(response => response.json()).then(response => location.reload())
        deleteModal.hide()
        document.location.reload();
    }
)
