import taskModel from "../models/task-model";

class TaskService {
  async addTask(task: string) {
    const createTask = await taskModel.create({ task });
    return { createTask };
  }
  async deleteTask(id: number) {
    const deleteTasks = await taskModel.findByIdAndDelete(id);
    return deleteTasks;
  }
  async getTasks() {
    const task = await taskModel.find();
    return task;
  }
}

export default new TaskService();