// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  } else {
    console.log('Connect to MongoDB server');
  }

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result)
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // })
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res);
  // })
  // db.collection('Users').deleteMany({name: 'Patrick'}).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5c4675768660237593879029')}).then((res) => {
    console.log(res)
  })
  db.close();
});