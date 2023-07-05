const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
  task: { type: String, require: true, default: '' },
  isComplited: { type: Boolean, default: false }
});

module.exports = model('Task', TaskSchema);