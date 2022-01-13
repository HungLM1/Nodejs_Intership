const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://hunglm1:pass1234@cluster0.r49r6.mongodb.net/voucher_db?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if (err) {
        throw err;
    }
    const collection = client.db("voucher_db").collection("events");
    collection.find({}).toArray(function(err, result) {
        if (err) {
            throw err;
        }
        console.log("mongodb num of record is loaded: %d",result.length);
  });
});

module.exports = client