const mongoose = require('mongoose')
const schema = mongoose.Schema

const smsSchema = new schema ({
    category: {
        type: String
    },
    name : {
        type: String
    },
    price: {
        type: Number
    },
    picture: {
        type: Array
    },
    updatedBy: {
        type: Array
    },
    approvedBy: {
        type: Array
    }
},{timestamp: true})

const sms = mongoose.model('sms', menuSchema)
module.exports = sms