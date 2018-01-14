const url = 'mongodb://localhost:27017/learnyoumongo';
const age = process.argv[2];
var mongo = require('mongodb').MongoClient
  mongo.connect(url, function(err, db) {
    if (err) throw err;
    const collection = db.collection('parrots');
    collection.count({
      age: { $gt: +age } 
    }, (err, count) => {
      if (err) throw err;
      console.log(count);
      db.close();
    });
});