const container = document.getElementById("container");
console.log(container);

const lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";

lists[1].removeChild(lists[1].children[1]);

lists.forEach(list => {
  list.children[0].textContent = "hamza";
});

lists.forEach(list => {
  list.classList.add("student_list");
});

lists[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

Array.from(lists[1].children).forEach(li => {
  if (li.textContent.trim() === "Dan") {
    li.style.display = "none";
  }
});

Array.from(lists[0].children).forEach(li => {
  if (li.textContent.trim() === "Richard") {
    li.style.border = "1px solid black";
  }
});
