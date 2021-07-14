const Sms = require('../models/Sms')
const Senders = require('../senders/sender')


const sms = (req,res,next) => {
    
    let data = req.body
    console.log(data)
    res.send(data)
}


module.exports = sms