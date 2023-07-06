const taskModel = require('../models/task-model');
const express = require('express');
const app = express();

class TaskService {
  async addTask(task) {
    const createTask = await taskModel.create({ task: task });
    return { createTask };
  }
  async deleteTask(id) {
    const deleteTasks = await taskModel.findByIdAndDelete(id);
    return deleteTasks;
  }
  async getTasks() {
    const task = await taskModel.find();
    return task;
  }
}

module.exports = new TaskService();