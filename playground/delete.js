const {MongoClient, ObjectID} = require('mongodb');

//const mohsin = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/mohsin', (err, db) => {
  if (err) {
    return console.log('err');
  }
  console.log('Success');

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5ae82dd905e1ab2984d7e3a9')
  }).then((results) => {
    console.log(results);
  });
  db.close();
});
