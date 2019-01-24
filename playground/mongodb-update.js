// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  } else {
    console.log('Connect to MongoDB server');
  }

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c47a447c97eacce1e0a5602')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c467490a8367b7585392ce9')
  }, {
    $set: {
      name: 'Terry'
    },
    $inc: {
      age: 2
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res)
  })
  db.close();
});