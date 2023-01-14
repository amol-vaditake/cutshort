const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();
require('./db');

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

const userRoutes = require('./routes/users');

app.use('/api/users', userRoutes);

module.exports = app;
