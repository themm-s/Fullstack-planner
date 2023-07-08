const express = require('express');
const router = express.Router();
const taskService = require('./taskService');

router.post('/task', async (req, res) => {
  const { task, isComplited } = req.body;
  const tasks = await taskService.addTask(task, isComplited);
  res.json(tasks);
});

router.post('/deletetask', async (req, res) => {
  const id = req.body?.id;
  const deletedTasks = await taskService.deleteTask(id);
  res.json(deletedTasks);
});

router.get('/getall', async (req, res) => {
  const gettingTask = await taskService.getTasks();
  res.json(gettingTask);
});

module.exports = router;
