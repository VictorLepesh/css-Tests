const url = require("./10.5_atlasLogin").url;
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
  if (err) throw err;
  const dbo = db.db("mydb");
  dbo.createCollection("customers", (err, res) => {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
}); 