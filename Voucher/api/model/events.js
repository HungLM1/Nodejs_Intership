const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: {
    type: String,
  },
  max_quantity: {
    type: String,
  },
  cur_quantity: {
    type: String,
  },
});

const events = mongoose.model("events", schema, "events");

module.exports = events;