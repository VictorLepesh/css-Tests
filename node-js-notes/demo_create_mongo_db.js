const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

// Add useNewUrlParser: true in an object as second argument to avoid this error "(node:11732) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version."
// Add useUnifiedTopology: true in an object as the second argument to avoid this error "(node:3224) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version."
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});