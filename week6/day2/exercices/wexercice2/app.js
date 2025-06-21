const express = require('express');
const router = require('./routes/todos.js');

const app = express();

app.use("/", router);

app.listen(3000, () => {
    console.log("server is running in http://localhost:3000");
});