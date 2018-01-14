const url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient
  mongo.connect(url, function(err, db) {
    if (err) throw err;
    const parrots = db.collection('parrots');
    const age = process.argv[2];
    db.collection('parrots').find({
      age: { $gt: +age } 
    }, {
      name: 1,
      age: 1,
      _id: 0
    }).toArray(function(err, documents) {
      if (err) throw err;
  		console.log(documents);
  		db.close();
  });
});