const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());

const secret = 'secret';

app.post('/auth', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    const token = jwt.sign({ user: 'admin' }, secret);
    return res.json({ token });
  }
  return res.status(401).json({ message: 'Invalid username or password' });
});

app.get('/secure', (req, res) => {
  const token = req.headers.jwt;
  if (token) {
    const decoded = jwt.verify(token, secret);
    return res.json({ verified: true, message: 'Nice job' });
  }
  return res.json({ verified: false, message: 'Not authenticated' });
});

app.listen(3001, () => {
  console.log('Api running on localhost:3001');
});
