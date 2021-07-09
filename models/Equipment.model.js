const mongoose = require('mongoose')
const Schema = mongoose.Schema

const equipmentSchema = new Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        name: String,
        brand: String,
        serie: String,
        description: String,
        status: {
            type: String,
            enum: ['OPERATIVO', 'ESTROPEADO', 'MANTENIMIENTO', 'EXTRAVIADO'],
            trim: true
        },
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

equipmentSchema.index({ location: '2dsphere' })
const Equipment = mongoose.model('Equipment', equipmentSchema)

module.exports = Equipment
