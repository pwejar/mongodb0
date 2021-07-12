const express = require('express')
var unirest = require('unirest');


const router = express.Router()

const X2250Controller = require('../controllers/X2250Controller')
// const getToken = require('../middleware/X2250')

router.get('/get_tokens',_access_token, X2250Controller._getTokens)
router.get('/confirmation', X2250Controller.confirmation)
router.get('/validation', X2250Controller.validation)
// access token 
function _access_token (req, res, next) {
    let auth = "Basic " + Buffer.from(process.env.consumer_key + ":" + process.env.consumer_secret).toString("base64");
    unirest.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials')
    .headers({'Authorization': auth})
    .send()
    .then((response) => {
        // req.access_token = response.body.access_token
        console.log(response.body)
        next()
    }).catch((err) =>{console.log(err)})
  }
module.exports = router