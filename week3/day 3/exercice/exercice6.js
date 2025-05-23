const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
const logoutText = document.createTextNode("Logout");
newLi.appendChild(logoutText);

const ul = navDiv.querySelector("ul");
ul.appendChild(newLi);

const firstLiText = ul.firstElementChild.textContent;
const lastLiText = ul.lastElementChild.textContent;

console.log("First list item:", firstLiText);
console.log("Last list item:", lastLiText);
