const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');

const SALT_ROUNDS = 10;

const registerUser = async (req, res) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;
    if (!email || !username || !password) {
      return res.status(400).json({ error: 'Email, username and password are required' });
    }

    const existingUser = await UserModel.getUserByUsername(username);
    if (existingUser) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await UserModel.createUserWithPassword(
      { email, username, first_name, last_name },
      hashedPassword
    );

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const user = await UserModel.getUserByUsername(username);
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const hash = await UserModel.getPasswordHashByUsername(username);
    const match = await bcrypt.compare(password, hash);
    if (!match) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.json({ message: 'Login successful', user });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await UserModel.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await UserModel.updateUserById(req.params.id, req.body);
    if (!updatedUser) return res.status(404).json({ error: 'User not found' });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
};
