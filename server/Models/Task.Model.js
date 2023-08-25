const mongoose = require('mongoose');

// Define Task schema
const taskSchema = new mongoose.Schema({
    taskName: String,
    startTime: String,
    endTime: String,
    priority: String
});

module.exports = taskSchema;