const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/mohsin', (err, db) => {
  if (err) {
    return console.log('fail');
  }
  console.log('success');

  // db.collection('Users').insertOne({
  //   text: 'andrew',
  //   age: 22,
  //   location: 'India'
  // }, (err, res) => {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  db.collection('Users').find({text: 'mohsin'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  });

  db.close();
});
