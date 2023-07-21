const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  name:String,
  email:String,
  age:Number
});

module.exports = mongoose.model('Userlist', listSchema);