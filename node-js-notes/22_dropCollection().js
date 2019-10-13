const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
  if (err) throw err;
  const dbo = db.db("mydb");
  dbo.dropCollection("customers", (err, delOK) => {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
}); 