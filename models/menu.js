const mongoose = require('mongoose')
const schema = mongoose.Schema

const menuSchema = new schema ({
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

const menu = mongoose.model('menu', menuSchema)
module.exports = menu