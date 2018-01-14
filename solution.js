const url = 'mongodb://localhost:27017/learnyoumongo';
const size = process.argv[2];
var mongo = require('mongodb').MongoClient
  mongo.connect(url, function(err, db) {
    if (err) throw err;
    const collection = db.collection('prices'); 
    collection.aggregate([
      { $match: { size: size } },
      { $group: {
        _id: 'average',
        average: { $avg: '$price' }
      }}
    ]).toArray((err, results) => {
      if (err) throw err;
      if (!results.length) {
          throw new Error('No results found')
        }
      const o = results[0];
      console.log(Number(o.average).toFixed(2));
      db.close();
    });
});