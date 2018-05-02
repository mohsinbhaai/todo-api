var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    trim: true
    //required: 'Email address is required',
    //minlength: 8
  }
  // ,
  // completed: {
  //   type: Boolean,
  //   default: false
  // },
  // completedAt: {
  //   type: Number,
  //   default: null
  // }
});

module.exports = {
  Todo
}
