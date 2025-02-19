const bcrypt = require('bcryptjs');
const { generateToken } = require('../config/auth');

let users = []; // For simplicity, we'll use an in-memory array for users

// Register User
const register = (req, res) => {
  const { username, password } = req.body;

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Save user in "database" (in-memory array for now)
  const newUser = { id: Date.now(), username, password: hashedPassword };
  users.push(newUser);

  const token = generateToken(newUser);

  res.status(201).json({ message: 'User registered successfully', token });
};

// Login User
const login = (req, res) => {
  const { username, password } = req.body;

  // Find user in "database"
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Compare password
  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user);
  res.status(200).json({ message: 'Login successful', token });
};

module.exports = { register, login };
