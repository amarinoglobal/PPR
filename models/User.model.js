const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: { type: String, unique: true },
    name: String,
    lastName: String,
    password: String,
    nid: String,
    tid: {
      type: String,
      enum: ['DNI', 'NIE', 'PASSPORT'],
    },
    profileImg: String,
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User
