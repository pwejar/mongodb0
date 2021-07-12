const request = require('request');
const Senders = reqire('../senders/sender.js')




const getTokens = ( _access_token,(req, res)=>{
    res.status(200).json({message: req.access_token})
})
// confirmation url
const confirmation = (req , res)=>{
  console.log("-----------------------con --------------")
  console.log(JSON.stringify(req.body))
  // const theData = JSON.stringify(req.body);
  // wekadata(req.body);
  res.status(200).json({
      "ResultCode": 0,
      "ResultDesc": "Accepted"
  })
  
}
// validation url
const validation = (req , res)=>{
  // console.log("-----------------------val --------------")
  // console.log(JSON.stringify(req.body))
  // admin.firestore().collection('clients').doc(req.body.BillRefNumber).get().then(function (doc) {
  //   if (doc.exists) {
  //     res.status(200).json({
  //       "ResultCode": 0,
  //       "ResultDesc": "Accepted",
  //       "ThirdPartyTransID": req.body.BillRefNumber
  //   })
      
  //   } else {
  //     res.status(200).json({
  //       "ResultCode": 0,
  //       "ResultDesc": "Accepted",
  //       "ThirdPartyTransID": "unknown"
  //   })
  //   }
  // }).catch(function (error) {
  //   res.status(200).json({
  //     "ResultCode": 0,
  //     "ResultDesc": "Accepted",
  //     "ThirdPartyTransID": "errorO"
  // })
  // });
  
  res.status(200).json({
    "ResultCode": 0,
    "ResultDesc": "Accepted",
    "ThirdPartyTransID": req.body.BillRefNumber
})
}

function _access_token (req, res, next) {


    
    consumer_key = "4P8jPsAARGvwy9tkZFGLFbfRlPb4uUBE",
    consumer_secret = "uzOLk8HNJau6kVJG",
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
        req.access_token = JSON.parse(body).access_token
          next()
      }
    )
   
  }
module.exports = {
  getTokens,confirmation, validation
}