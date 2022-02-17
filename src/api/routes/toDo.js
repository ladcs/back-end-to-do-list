const { Router } = require('express');
const toDoController = require('../../controller/ToDoController');

const route = Router();

const controller = new toDoController(route);

controller.handle();

module.exports = route;
