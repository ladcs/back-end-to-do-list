const bodyParser = require('body-parser');
const express = require('express');
const toDo = require('./routes/toDo');
const error = require('../middlewares/error');

const app = express();

app.use(bodyParser.json());

app.use('/', toDo);
app.use(error);


module.exports = app;
