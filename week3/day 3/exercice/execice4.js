function hotelCost() {
    let nights = prompt("How many nights will you be staying?");
    if (!nights) {
        alert("Input cancelled.");
        return hotelCost();
    } else if (isNaN(nights) || nights.trim() === '') {
        alert("Please enter a valid number");
        return hotelCost();
    } else {
        let cost = 140 * Number(nights);
        console.log("Your hotel cost is $" + cost);
        return cost;
    }
}

function planeRideCost() {
    let destination = prompt("Where are you going?");
    if (!destination) {
        alert("Input cancelled.");
        return planeRideCost();
    } else if (typeof destination !== 'string' || destination.trim() === '') {
        alert("Please enter a valid string");
        return planeRideCost();
    } else {
        destination = destination.toLowerCase().trim();
        switch(destination) {
            case "paris":
                console.log("Your flight cost is $220");
                return 220;
            case "london":
                console.log("Your flight cost is $183");
                return 183;
            default:
                console.log("Your flight cost is $300");
                return 300;
        }
    }
}

function rentalCarCost() {
    let days = prompt("How many days will you be renting the car?");
    if (!days) {
        alert("Input cancelled.");
        return rentalCarCost();
    } else if (isNaN(days) || days.trim() === '') {
        alert("Please enter a valid number");
        return rentalCarCost();
    } else {
        let cost = 40 * Number(days);
        console.log("Your car rental cost is $" + cost);
        return cost;
    }
}

function totalVacationCost() {
    let hotel = hotelCost();
    let plane = planeRideCost();
    let car = rentalCarCost();
    let total = hotel + plane + car;
    alert("Your hotel cost is $" + hotel);
    alert("Your plane ride cost is $" + plane);
    alert("Your car rental cost is $" + car);
    alert("Your total vacation cost is $" + total);
    return total;
}

totalVacationCost();
