var unirest = require('unirest');


const getToken = (req, res, next) => {

    let auth = "Basic " + Buffer.from(process.env.consumer_key + ":" + process.env.consumer_secret).toString("base64");
    unirest.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials')
    .headers({'Authorization': auth})
    .send()
    .then((response) => {
        if (response.error) throw new Error(response.error);
        req.access_token = response.body.access_token
        console.log(response.body)
        next()
    })
}

module.exports = getToken