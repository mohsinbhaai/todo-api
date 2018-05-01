const mohsin = require('mongodb').MongoClient;

mohsin.connect('mongodb://localhost:27017/mohsin', (err, db) => {
  if (err) {
    return console.log('unable to connect');
  }
  console.log('Success');

  db.collection('Users').insertOne({
    text: 'mohsin',
    age: 22,
    location: 'India'
  }, (err, res) => {
    if (err) {
      return console.log(err);
    }
    console.log(JSON.stringify(res.ops, undefined, 2));
  });

  db.close();
});
