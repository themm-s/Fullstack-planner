const Router = require('express').Router;
const router = new Router();
const taskService = require('../services/task-service');

router.get('/task', taskService.addTask);

module.exports = router;