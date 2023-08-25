const mongoose = require('mongoose');

// Connect to MongoDB
const mongoURI = 'mongodb://127.0.0.1:27017/ProductivityX';
const dbConnection = mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = dbConnection;