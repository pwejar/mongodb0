var request = require('request');


const getToken = (req, res, next) => {
    console.log('ne',req.url)
    // let auth = "Basic " + Buffer.from(process.env.consumer_key + ":" + process.env.consumer_secret).toString("base64");
    // unirest.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials')
    // .headers({'Authorization': auth})
    // .send()
    // .then((response) => {
    //     if (response.error) throw new Error( response.error);
    //     req.access_token = response.body.access_token
    //     console.log(response.body)
    //     next()
    // })
   
    url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    auth = "Basic " + Buffer.from(process.env.consumer_key + ":" + process.env.consumer_secret).toString("base64");

    request(
        {
        url : url,
        headers : {
            "Authorization" : auth
        }
        },
        function (error, response, body) {
        // TODO: Use the body object to extract OAuth access token
        consol.log(body)
        req.access_token = JSON.parse(body).access_token
            next()
        }
    )
}

module.exports = getToken