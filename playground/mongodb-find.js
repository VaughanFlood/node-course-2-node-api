// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c683d1af6dcc809e8bd19bc')
  // }).toArray().then( (docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to connect to fetch todos', err);
  // });
  var myName = 'Vaughan';
  db.collection('Users').find({name: myName}).count().then((count) =>{
    console.log(`${myName} count: ${count}`);
  }, (err) => {
    console.log('Unable to connect to fetch todos', err);
  });


  // db.close();
});
