const mongoose = require('mongoose');
let eventModel = require("./model/events");
const uri = "mongodb+srv://hunglm1:pass1234@cluster0.r49r6.mongodb.net/voucher_db?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
  if (err) {
    throw err;
  }
  eventModel.findOne({code_event: "test_code" }, function (err, eventsObj)  {
    if (err) {
      console.log(err);
    } 
    else if (eventsObj) {
      console.log("max_quantity: %d", eventsObj.max_quantity);
      console.log("cur_quantity: %d", eventsObj.cur_quantity);
    }
  });
});

module.exports = mongoose