const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) =>{
    try {
        const  token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'killerB797y')

        req.user = decode
        next()
    }
    catch(error){
        res.json({
            message: " Authentication Faile",
            error: error   
        })
    }
}

module.exports = authenticate