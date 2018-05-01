//const mohsin = require('mongodb').MongoClient;

  const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('fail');
  }
  console.log('success');

  db.collection('Todos').find({
    _id: new ObjectID('5ae88e33e5613233e2676f1c')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Error occured: ' , err);
  });

  //db.close();
});


// //const mohsin = require('mongodb').MongoClient;
//
//   const {MongoClient, ObjectID} = require('mongodb');
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//   if (err) {
//     return console.log('fail');
//   }
//   console.log('success');
//
//   db.collection('Todos').find().count().then((count) => {
//     console.log(`Todos count: ${count}`);
//   }, (err) => {
//     console.log('Error occured: ' , err);
//   });
//
//   //db.close();
// });
