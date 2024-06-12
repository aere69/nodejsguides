const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mydatabase',
  password: 'password',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.use(express.json());

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(results);
  });
});

module.exports = app;