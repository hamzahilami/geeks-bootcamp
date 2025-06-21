const express = require("express");
const path = require("path");
const usersRouter = require("./routes/users");

const app = express();

app.use(express.json()); 
app.use(express.static(path.join(__dirname, "public")));
app.use("/", usersRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
