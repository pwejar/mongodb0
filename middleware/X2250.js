var unirest = require('unirest');
require('dotenv').config()
const getToken = (req, res, next) => {

    let auth = "Basic " + Buffer.from(process.env.consumer_key + ":" + process.env.consumer_secret).toString("base64");
    let jsl = unirest.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials')
    .headers({'Authorization': auth})
    .send()
    .then((response) => {
        if(response.error) {
            return res.status(304).json({message: 'too baa'+process.env.consumer_key})
        }
        req.access_token = response.body.access_token
        console.log(response.body)
        next()
    })
}

module.exports = getToken