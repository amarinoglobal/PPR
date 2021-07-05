const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tansmitterSchema = new Schema(
    {
        name: String,
        brand: String,
        description: String,
        location: {
            type: { type: String }, coordinates: [Number]
        },

    },
    {
        timestamps: true
    })
const Transmitter = mongoose.model('Transmitter', transmitterSchema);

module.exports = Transmitter;
