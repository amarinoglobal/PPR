const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shippingSchema = new Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        date: Date,
        status: {
            type: String,
            enum: ['APROBADO', 'PENDIENTE', 'RECHAZADO'],
            dafault: 'PENDIENTE'
        },
        equipment: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Equipment'
        }],
        warehouse: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Warehouse'
        },
        location: {
            type: { type: String }, coordinates: [Number]
        }
    },
    {
        timestamps: true
    }
)

shippingSchema.index({ location: '2dsphere' })
const Shipping = mongoose.model('Shipping', shippingSchema)

module.exports = Shipping


