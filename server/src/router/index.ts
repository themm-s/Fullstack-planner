import express, { Request, Response } from "express";

import taskService from "../services/task-service";

const router = express.Router();

router.post('/task', async (req: Request, res: Response) => {
  const { task } = req.body;

  const tasks = await taskService.addTask(task);

  res.json(tasks);
});

router.post('/deletetask', async (req: Request, res: Response) => {
  const { id } = req.body;

  const deletedTasks = await taskService.deleteTask(id);

  res.json(deletedTasks);
});

router.get('/getall', async (req: Request, res: Response) => {
  const gettingTask = await taskService.getTasks();
  res.json(gettingTask);
});

export default router;