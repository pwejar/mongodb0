const axios = require('axios');
const sendMeText = (ujumbe,nambari) => {
    axios.post('http://bulksms.mobitechtechnologies.com/api/sendsms', {
        api_key: process.env.API_KEY,
        username: process.env.YOUR_USER_NAME,
        sender_id: process.env.YOUR_ASSIGNED_SENDER_ID,
        message:ujumbe,
        phone:nambari
        //,254758864907
    // eslint-disable-next-line promise/always-return
    }).then(res => {
            console.log(`statusCode: `,res)
            // console.log(res) 
    }).catch(error => {
            console.error("error sms",error)
    })
}

const sendEmail = (emailObject) => {
    //  example of emailObject{
    //     from: 'webmaster@mabuhay.club',
    //     to: `booking@mabuhay.club,pwejar@gmail.com`,
    //     subject: 'Reservation Request',
    //     text: `${data.title}`,
    //     html: `Sample*** Hey Team,<br><br>
    //     Kindly follow up on reservetion:
    //     <br>Name: ${data.by.name}
    //     <br>Phone:${data.by.phone}
    //     <br>email:${data.by.email}
    //     <br>date:${timeConverter(data.date.seconds)}
    //     <br>No of guest:${data.totalGuest} `
    // }
    let authData=nodemailer.createTransport({
        host:'mail.pwejar.com',
        port:465 ,
        secure: true,
        auth:{
            user: process.env.SENDER_EMAIL2,
            pass:process.env.SENDER_PASSWORD2
        }
    });
    authData.sendMail(emailObject).then(res=>console.log('email sent to client')).catch(err=>console.log("erremail",err));
}

module.exports = {
    sendMeText, sendEmail
}