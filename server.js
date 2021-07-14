const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()
const MenuRoute = require('./routes/menu')
const AuthRoute = require('./routes/auth')
const X2250Route = require('./routes/X2250')
const SmsRoute = require('./controllers/sms')

// mongodb+srv://user0:<password>@db000001.f7dhn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://user0:H5YEcZMT5d3XsWk@db000001.f7dhn.mongodb.net/mabuhay?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true})
// mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser:true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error',(errror) =>{
    console.log(errror)
})
db.once('open',()=>{
    console.log('welcome home kim')
})
const app = express()
app.use(morgan('dev'))
app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());
app.use('/uploads',express.static('uploads'))

const PORT =process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`kipchoge${PORT} keep joking, keep choking sfsdf`)
})
app.use('/api/menu', MenuRoute)
app.use('/api/auth', AuthRoute)
app.use('/api/x2250', X2250Route)
app.use('/api/sms', SmsRoute)

