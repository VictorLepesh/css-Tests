const MongoClient = require('mongodb').MongoClient;
const url = require('./10.5_atlasLogin').url;

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db('mydb');
    dbo.createCollection('customers', function(err, res) {
        if (err) throw err;
        console.log('Collection created!');
        db.close();
    });
}); 