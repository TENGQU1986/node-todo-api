const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const email = 'teng.qu@pwc.com';
const id = '5c465f0ffd27e874e560a7e3';

// User.findOne({
//   name: 'Tiantian'
// }).then((user) => {
//   console.log('user', user);
// }).catch((err) => {
//   console.log(err);
// });

User.findById(id).then((user) => {
  if(!user) {
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
