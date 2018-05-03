var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    trim: true
    // lowercase: true,
    // unique: true,
    // required: 'Email address is required',
    // minlength: 8
  }
});

module.exports = {
  User
}
