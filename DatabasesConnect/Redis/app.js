const express = require('express');
const redis = require('redis');

//Connect to Redis
const client = redis.createClient();

client.on('connect', () => {
  console.log('Connected to Redis');
});

client.on('error', (err) => {
  console.error('Error connecting to Redis', err);
});

//Create a Route
const app = express();

app.use(express.json());

app.get('/cache', (req, res) => {
  client.get('key', (err, value) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(value);
  });
});

module.export = app;
