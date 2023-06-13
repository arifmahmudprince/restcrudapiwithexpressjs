const mongoose = require('mongoose')
const Schema = mongoose.Schema
const pi = 3.14

const QaMemberSchema = new Schema({
    
    name: {
        type: String,
        require: true
    },
    position: {
        type: String,
        require: true
    },
    employee_id: {
        type: Number,
        require: true
    },
    salary: {
        type: Number,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now,
        require: true
    }
})

const UpdateHistory = new Schema({
    name: {
        type: String,
        require: true
    },
    update_date: {
        type: Date,
        require: true
    }
})

const QaMember = mongoose.model('member', QaMemberSchema)
// const UpdateHistory = mongoose.model('updatehistory', UpdateHistory)
module.exports = QaMember