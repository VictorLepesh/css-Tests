const myquery = { address: "Valley 345" };
const newvalues = { $set: { address: "Canyon 123" } };
dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {