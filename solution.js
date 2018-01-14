const url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient
  mongo.connect(url, function(err, db) {
    if (err) throw err;
    const users = db.collection('users');
    const obj = {firstName: process.argv[2], lastName: process.argv[3]};
    users.insert(obj);
    console.log(JSON.stringify(obj));
  	db.close();
});