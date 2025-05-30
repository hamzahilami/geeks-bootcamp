let client = "betty";


const displaygroceries = () => {
    console.log(groceries.fruits);
}
const clonegroceries = () => {
    let user = client;
    console.log(user);
    let shopping = groceries;
    groceries.totalPrice = "15$"
    groceries.other.paid = false
    console.log(shopping);
    displaygroceries();
}
const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

clonegroceries();
//The changes affected both variables because objects are assigned by reference 
