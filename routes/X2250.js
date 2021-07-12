const express = require('express')
// var unirest = require('unirest');
const request = require('request')


const router = express.Router()

const X2250Controller = require('../controllers/X2250Controller')
// const getToken = require('../middleware/X2250')

router.get('/get_tokens',_access_token, X2250Controller._getTokens)
router.get('/confirmation', X2250Controller.confirmation)
router.get('/validation', X2250Controller.validation)
// access token 
function _access_token (req, res, next) {
    let auth = "Basic " + Buffer.from(process.env.consumer_key + ":" + process.env.consumer_secret).toString("base64");
    // unirest.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials')
    // .headers({'Authorization': auth})
    // .send()
    // .then((response) => {
    //     // req.access_token = response.body.access_token
    //     console.log(response.body)
    //     next()
    // }).catch((err) =>{console.log(err)})

    
    url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    
    return request(
        {
            url: url,
            headers: {
                "Authorization": auth
            }
        },
        function (error, response) {
            // TODO: Use the body object to extract OAuth access token
            console.log(JSON.parse(JSON.parse(JSON.stringify(response)).body).access_token)
            req.access_token = JSON.parse(JSON.parse(JSON.stringify(response)).body).access_token
            next()
        }
    )
    // request
    // .get(url)
    // .on('response', function(response) {
    //     console.log(response.statusCode) // 200
    //     console.log(response.headers['content-type']) // 'image/png'
    // })
  }
module.exports = router