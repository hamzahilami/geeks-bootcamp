const isString = (str) => {
    if (typeof str === 'string') {
        return true;
    } else {
        return false;
    }
};




console.log(isString('hello'));
//true
console.log(isString([1, 2, 4, 0]));
//false
