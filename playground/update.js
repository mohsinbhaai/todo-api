const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/mohsin', (err, db) => {
  if (err) {
    return console.log('err');
  }
  console.log('success');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ae81d30d79669238ee0264c')
  }, {
    $set: {
      text : 'Mead',
      location: 'India'
    },
    $inc: {
    age: 5
  }
  },

    {
      returnOriginal: false
    }).then((res) => {
      console.log(res);
    });
});
