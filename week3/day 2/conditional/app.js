const age = prompt("What is your age?");
const numericAge = Number(age);

if (numericAge < 18) {
  alert("Sorry, you are too young to drive this car. Powering off");
} else if (numericAge === 18) {
  alert("Congratulations on your first year of driving. Enjoy the ride!");
} else if (numericAge > 18) {
  alert("Powering On. Enjoy the ride!");
} else {
  alert("Invalid input. Please enter a number.");
}
