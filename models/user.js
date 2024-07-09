// Import Mongoose
const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create user model
const User = mongoose.model('User', userSchema);

// Export user model
module.exports = User;
