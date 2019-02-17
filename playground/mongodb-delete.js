// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Users').deleteMany({name: 'Vaughan'}).then((result) =>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5c68405dc63b853d9c3f4d82')}).then((result) =>{
    console.log(result);
  });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
  //   console.log(result);
  // });

  // db.close();
});
