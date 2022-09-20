//заполняет Admin panel -> User info table
fetch(meUrl).then(res => {
    res.json().then(data => {
        document.getElementById("showInformationAboutAdmin").innerHTML = `   
            <tr>
                <td>${data["id"]}</td>
                <td>${data["firstName"]}</td>
                <td>${data["lastName"]}</td>
                <td>${data["age"]}</td>
                <td>${data["email"]}</td>
                <td>${data["roles"].map(el => el.role)}</td>               
            </tr>
        `;
    })
})