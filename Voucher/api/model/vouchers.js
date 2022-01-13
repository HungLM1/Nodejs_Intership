const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    code: {
        type: String,
    },
    ower: {
        type: String,
    },
    issued_date: {
        type: Date,
    },
});

module.exports = mongoose.model("Vouchers", schema);