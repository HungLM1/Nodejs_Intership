const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  code_event: {
    type: String,
  },
  max_quantity: {
    type: Number,
  },
  cur_quantity: {
    type: Number,
  },
});

module.exports = mongoose.model("Events", schema);