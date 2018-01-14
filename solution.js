const url = `mongodb://localhost:27017/${process.argv[2]}`;
var mongo = require('mongodb').MongoClient
  mongo.connect(url, function(err, db) {
    if (err) throw err;
    const users = db.collection('users');
    users.update({
      username: "tinatime"
    }, {
      $set: {
        age: 40
      }
    }, (err) => {
      if (err) throw err;
      db.close();
    });
});