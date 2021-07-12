const Senders = require('../senders/sender.js')

const getToken = require('../middleware/X2250')

const _getTokens = (req, res)=>{
  
  res.status(200).json({message: req.access_token})
}
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

module.exports = {
  _getTokens,confirmation, validation
}