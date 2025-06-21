const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const filePath = path.join(__dirname, '../tasks.json');

// Read tasks from file
const readTasks = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Write tasks to file
const writeTasks = (tasks) => {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

// GET /tasks
router.get('/', (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// GET /tasks/:id
router.get('/:id', (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});

// POST /tasks
router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const tasks = readTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description: description || ''
  };

  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

// PUT /tasks/:id
router.put('/:id', (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks[index] = { ...tasks[index], title, description };
  writeTasks(tasks);
  res.json(tasks[index]);
});

// DELETE /tasks/:id
router.delete('/:id', (req, res) => {
  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const deletedTask = tasks.splice(index, 1)[0];
  writeTasks(tasks);
  res.json({ message: 'Task deleted', task: deletedTask });
});

module.exports = router;
