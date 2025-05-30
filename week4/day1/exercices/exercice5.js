function unitekgToGram(kg) {
    return kg * 1000;
}
function unitekgToGram2(kg) {
    return kg * 1000;
}
console.log(unitekgToGram2(2));

var unitekgToGram3 = function(kg) {
    return kg * 1000;
}
console.log(unitekgToGram3(2));

//difference: function declaration can be invoked before it is declared, function expression can only be invoked after it is declared

var unitekgToGramArrow = kg => kg * 1000;
console.log(unitekgToGramArrow(2));
