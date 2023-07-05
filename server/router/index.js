const Router = require('express').Router;
const router = new Router();
const taskModel = require('../models/task-model');
const taskService = require('../services/task-service');

router.get('/task', taskService.addTask);

module.exports = router;