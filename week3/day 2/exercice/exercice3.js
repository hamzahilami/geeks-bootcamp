let userInput = prompt("Enter a number");

if (userInput === null) {
  console.log("Input cancelled.");
} else if (isNaN(Number(userInput))) {
  console.log("Please enter a valid number");
} else {
  let userInput2 = prompt("Please enter another number");

  while (userInput2 !== null && Number(userInput2) < 10) {
    console.log("Please enter a BIGGER number");
    userInput2 = prompt("Please enter another number");
  }

  if (userInput2 === null) {
    console.log("Input cancelled.");
  } else {
    console.log("Good job!");
  }
}