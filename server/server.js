const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// save new something

const Todo = mongoose.model('Todo', {
  text: {
    type: String 
  }, 
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

const newTodo = new Todo({
  text: 'Cook dinner'
});

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

const newTodo1 = new Todo({
  text: 'Walk the dog',
  completed: true,
  completedAt: 1390
});

newTodo1.save().then((doc) => {
  console.log('Saved todo1', doc);
}, (err) => {
  console.log('Unable to save todo', err);
});