let eventModel = require("../model/events");

module.exports = {
    generateEvent: ( event_id, quantity, res) =>  {
        console.log("event_id %s, quantity %s", event_id, quantity);
        let events = new eventModel({
            code_event: code,
            max_quantity: quantity,
            cur_quantity: 0
        });
        events.save().then(doc => {
            //console.log(doc)
            res.json(doc)
        })
        .catch(err => {
            //console.error(err)
            res.json(err)
        })
    },
}