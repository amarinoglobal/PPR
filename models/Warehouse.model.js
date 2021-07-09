const mongoose = require('mongoose')
const Schema = mongoose.Schema

const warehouseSchema = new Schema(
    {
        name: String,
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        location: {
            type: { type: String }, coordinates: [Number]
        }
    },
    {
        timestamps: true
    }
)

warehouseSchema.index({ location: '2dsphere' })
const Warehouse = mongoose.model('Warehouse', warehouseSchema)

module.exports = Warehouse