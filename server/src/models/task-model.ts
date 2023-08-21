const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
  task: { type: String, require: true, default: '' },
  isComplited: { type: Boolean, default: false }
});

const taskModel = model('Task', TaskSchema);

export default taskModel; 