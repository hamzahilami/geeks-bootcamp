const express = require("express");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const router = express.Router();
const filePath = path.join(__dirname, "../users.json");

// Helper
const readUsers = () => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
};

const writeUsers = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

// POST /register
router.post("/register", async (req, res) => {
  const { name, lastName, email, username, password } = req.body;

  if (!name || !lastName || !email || !username || !password) {
    return res.status(400).send("All fields are required.");
  }

  const users = readUsers();
  const exists = users.find(u => u.username === username || u.password === password);
  if (exists) return res.send("Username or password already exists.");

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: users.length + 1,
    name,
    lastName,
    email,
    username,
    password: hashedPassword
  };

  users.push(newUser);
  try {
    writeUsers(users);
    res.send("User registered successfully.");
  } catch {
    res.status(500).send("Failed to write user.");
  }
});

// POST /login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const users = readUsers();
  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).send("User not found.");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).send("Invalid password.");

  res.send("Login successful.");
});

// GET /users
router.get("/users", (req, res) => {
  res.json(readUsers());
});

// GET /users/:id
router.get("/users/:id", (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found.");
  res.json(user);
});

// PUT /users/:id
router.put("/users/:id", (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("User not found.");

  const updated = { ...users[index], ...req.body };
  users[index] = updated;
  writeUsers(users);
  res.send("User updated.");
});

module.exports = router;
