const mongoose = require('mongoose');
const events = require("./model/events");
const uri = "mongodb+srv://hunglm1:pass1234@cluster0.r49r6.mongodb.net/voucher_db?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
      throw err;
    }
    const data = events.find({});
    // data.toArray(function(err, result) {
    //   if (err) {
    //       throw err;
    //   }
    //   console.log("mongoose num of record is loaded: %d",result.length);
    // });
    console.log('Successfully connected %s', data);
});

module.exports = mongoose