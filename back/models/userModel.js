const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nickname: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true , select: false},
  isAdmin: {type: Boolean, required: true, select: true}

});

const User = mongoose.model('User', userSchema);

module.exports = User;