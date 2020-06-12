const url = require('./10.5_atlasLogin').url;
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
    if (err) throw err;
    console.log('success');
    db.close();
});

