function readFormData(){
    var formData = {};
    formData["email"] = document.getElementById("email").value;
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["phonenum"] = document.getElementById("phonenum").value;
    formData["pass"] = document.getElementById("pass").value;
    return formData;
}

function clearFormData() {
    document.getElementById("email").value = '';
    document.getElementById("firstname").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById("phonenum").value = '';
    document.getElementById("pass").value = '';
    selectedRow = null;
}

// add user function 
function addUser() {
    let payload = getFormData();
    fetch("http://localhost:5000/persons/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then((res) => res.json()).then((response) => {
        // clear input email and name
        clearFormData();
        getData(); // reload table 
    })
}

function getFormData() {
    return {
        Email: document.getElementById("email").value,
        Firstname: document.getElementById("firstname").value,
        Lastname: document.getElementById("lastname").value,
        Phonenumber: document.getElementById("phonenum").value,
        Password: document.getElementById("pass").value

    }
}


// delete data
        function deleteData(id) {
            fetch("http://localhost:5000/persons/" + id, {
                method: "DELETE",

            }).then((res) => res.json()).then(
                (response) => {
                    setSuccessMessage(response.message);
                    getData();
                }
            )
        }