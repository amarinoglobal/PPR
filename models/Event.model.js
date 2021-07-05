const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: String,
    date: Date,
    client: String,
    producer: String,
    location: {
        type: { type: String }, coordinates: [Number]
    },
    description: String,
    citationCam: String, //puede ser una date?
    citationQ: String, 
    material: Object,
    logo: String,
    record: String
},
    {
        timestamps: true
    })
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
