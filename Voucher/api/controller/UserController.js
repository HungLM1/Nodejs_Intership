'use strict'

const util = require('util')
const mongodb = require('mongodb');
const mongoosedb = require("mongoose");
const mongoose = require('../mongoosedb')
let eventModel = require("../model/events");
const { log } = require('console');

module.exports = {
    signUp: (req, res) => {
        // learning syntax get body elements on json
        res.json("good");
    },

    signIn: (req, res) => {
        // learning syntax get body elements on json
        res.json("good");
    },
}

