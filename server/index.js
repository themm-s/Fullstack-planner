require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const taskService = require('./services/task-service');
const taskModel = require('./models/task-model');


const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.post('/task', async (req, res) => {
  const { task, isComplited } = req.body;
  const tasks = await taskService.addTask(task, isComplited);
  res.json(tasks);
});

app.delete('/task', async (req, res) => {
  const { task } = req.body;
  const { deletedTasks } = await taskService.deleteTask({ task });
  // console.log(req.body.task);
  res.json(deletedTasks);
});

app.get('/getall', async (req, res) => {
  const gettingTask = await taskService.getTasks();
  res.json(gettingTask);
});

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.listen(PORT, () => console.log(`Сервер запустился, его порт ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();