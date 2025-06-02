function compareToTen(num) {
    const numTest = new Promise((resolve, reject) => {
        if (num > 10) {
            resolve("Greater than 10");
        } else {
            reject("Less than 10");
        }
    });
    return numTest;
}

compareToTen(5)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

