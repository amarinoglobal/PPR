const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: String,
    lastName: String,
    role: String,
    departmen: String,
},
    {
        timestamps: true
    })

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
