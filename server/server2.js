var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'Cook'
});

newTodo.save().then((err) => {
    console.log(err);
  }, (docs) => {
    console.log(docs);
  });
//
// var newSave = new Todo({
//   text: 'workout',
//   completed: false,
//   completedAt: 123
// });

//newSave.save();
