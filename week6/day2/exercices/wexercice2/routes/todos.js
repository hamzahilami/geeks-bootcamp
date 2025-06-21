const express = require('express');
const router = express.Router();

const todos = [];

router.use(express.json());

// Get all to-do items
router.get("/todos", (req, res) => {
    res.json(todos);
});

// Add a new to-do item
router.post("/todos", (req, res) => {
    const newTask = {
        id: todos.length + 1,
        task: req.body?.task,
    };
    todos.push(newTask);
    res.status(200).json({ message: "task has been added!" });
});

// Update a to-do item by ID
router.put("/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = todos.findIndex(task => task.id == id);
    if (index === -1) {
        res.json({ message: "task not exist in todo list!" });
    } else {
        todos[index].task = req.body?.task || todos[index].task;
        res.status(200).json({ message: "task has been updated!" });
    }
});

// Delete a to-do item by ID
router.delete("/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = todos.findIndex(task => task.id == id);
    if (index === -1) {
        res.json({ message: "task not exist in todo list!" });
    } else {
        todos.splice(index, 1);
        res.status(200).json({ message: "task removed !" });
    }
});

module.exports = router;