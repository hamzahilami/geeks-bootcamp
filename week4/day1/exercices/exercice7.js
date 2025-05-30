(function (userName) {
    var userDiv = document.createElement("div");
    userDiv.innerText = "Welcome, " + userName;

    var navbar = document.querySelector(".navbar");
    navbar.appendChild(userDiv);
})("John");