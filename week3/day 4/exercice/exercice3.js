// Declare a global variable
let allBoldItems;

// This function collects all bold items inside the paragraph
function getBoldItems() {
    const paragraph = document.getElementById("myParagraph");
    allBoldItems = paragraph.getElementsByTagName("strong");
}

// This function highlights all bold text in blue
function highlight() {
    for (let item of allBoldItems) {
        item.style.color = "blue";
    }
}

// This function changes bold text color back to black
function returnItemsToDefault() {
    for (let item of allBoldItems) {
        item.style.color = "black";
    }
}

// Initialize on page load
window.onload = function () {
    getBoldItems();

    const paragraph = document.getElementById("myParagraph");
    paragraph.onmouseover = highlight;
    paragraph.onmouseout = returnItemsToDefault;
};
