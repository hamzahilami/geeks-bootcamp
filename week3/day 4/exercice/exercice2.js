const form = document.getElementById("userForm");
console.log(form);

const inputFname = document.getElementById("fname");
const inputLname = document.getElementById("lname");
console.log(inputFname, inputLname);

const inputsByName = document.querySelectorAll("[name]");
console.log(inputsByName);

const ul = document.querySelector(".usersAnswer");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the default form submission (page reload)

    const fnameValue = inputFname.value.trim();
    const lnameValue = inputLname.value.trim();

    if (fnameValue === "" || lnameValue === "") {
        alert("Please fill out both fields.");
        return;
    }

    ul.innerHTML = ""; // Clear previous answers

    const li1 = document.createElement("li");
    li1.textContent = fnameValue;
    const li2 = document.createElement("li");
    li2.textContent = lnameValue;

    ul.appendChild(li1);
    ul.appendChild(li2);
});
