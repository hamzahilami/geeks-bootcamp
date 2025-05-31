function sendData() {
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;

    const jsonData = {
        name: name,
        lastname: lastname
    };

    document.getElementById('output').textContent = JSON.stringify(jsonData);
}