const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ae96d8246a8cf6c943381bb';
var id1 = '5ae96d8246a8cf6c943381bb';

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('not found');
  }
  console.log('Todo by id', todo);
});

User.findById(id1).then((user) => {
  if (!user) {
    console.log('not found user');
  }
  console.log('user is ', user);
});
