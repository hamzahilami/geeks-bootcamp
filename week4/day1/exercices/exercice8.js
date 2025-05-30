function makeJuice(size) {
    let ingredients = [];
    function addIngredient(ingredient) {
        ingredients.push(ingredient);
    }
    function displayJuice() {
        text = "Your " + size + " juice contains: " + ingredients.join(", ");
        document.getElementsByTagName("div")[0].innerHTML = text;
    }
    addIngredient("apple");
    addIngredient("banana");
    addIngredient("orange");
    displayJuice();


}

makeJuice("large");