'use strict'

const util = require('util')
const mongodb = require('mongodb');
const mongoosedb = require("mongoose");
//const client = require('./../db')
const client = require('./../mongoosedb')

module.exports = {
    getVoucher: (req, res) => {
        const collection = client.db("voucher_db").collection("events");
        collection.find({}).toArray(function(err, result) {
            if (err) {
                throw err;
            }
            res.json(result)      
        });
    }
}

