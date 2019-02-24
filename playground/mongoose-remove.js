const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) =>{
//   console.log(result);
// });

Todo.findOneAndRemove("5c728217b5d961cb1f4f51e5").then((todo) =>{
  console.log(todo);
})
