const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const camSchema = new Schema({
    name: String,
    brand: String,
    description: String,
    location: {
        type: { type: String }, coordinates: [Number]
    }

},
    {
        timestamps: true
    })

const Cam = mongoose.model('Cam', camSchema);

module.exports = Cam;
