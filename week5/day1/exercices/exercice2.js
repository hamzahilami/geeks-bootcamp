const Success = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 4000); // 4000 milliseconds = 4 seconds
});

Success
    .then(result => console.log(result))  // Logs: "success" after 4 seconds
