const url = `mongodb://localhost:27017/${process.argv[2]}`;
const id = process.argv[4];
var mongo = require('mongodb').MongoClient
  mongo.connect(url, function(err, db) {
    if (err) throw err;
    const collection = db.collection(process.argv[3]);
    collection.remove({
      _id: id
    }, (err) => {
      if (err) throw err;
      db.close();
    });
});