'use strict'

const util = require('util')
const mongodb = require('mongodb');
const mongoosedb = require("mongoose");
const mongoose = require('../mongoosedb')
const service = require('../service/EventService')
let eventModel = require("../model/events");
const { log } = require('console');

module.exports = {
    generateEvent: (req, res) => {
        // learning syntax get body elements on json
        const code = req.body.code;
        const quantity = req.body.quantity;

        // call service to execute function
        service.generateEvent(req.body.code, req.body.quantity);

        res.json("OK");
        // let events = new eventModel({
        //     code_event: code,
        //     max_quantity: quantity,
        //     cur_quantity: 0
        // });
        // events.save().then(doc => {
        //     //console.log(doc)
        //     res.json(doc)
        // })
        // .catch(err => {
        //     //console.error(err)
        //     res.json(err)
        // })
    },

    editEvent: (req, res) => {
        // learning syntax get params on url
        console.log(req.params.event_id)
        res.json("good");
    },

    releaseEvent: (req, res) => {
        // learning syntax get params on url
        console.log(req.params.event_id)
        res.json("good");
    },

    maintainEvent: (req, res) => {
        // learning syntax get params on url
        console.log(req.params.event_id)
        res.json("good");
    },
}

