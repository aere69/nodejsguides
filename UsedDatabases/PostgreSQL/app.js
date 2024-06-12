const express = require('express');

// Connect to PostgreSQL
const { Client } = require('pg');

const client = new Client({
  user: 'user',
  host: 'localhost',
  database: 'mydatabase',
  password: 'password',
  port: 5432,
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Error connecting to PostgreSQL', err));

//Create a Route
const app = express();

app.use(express.json());

app.get('/users', async (req, res) => {
    try {
      const result = await client.query('SELECT * FROM users');
      res.send(result.rows);
    } catch (error) {
      res.status(500).send(error);
    }
});

module.exports = app;