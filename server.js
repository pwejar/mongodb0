const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()
const MenuRoute = require('./routes/menu')
const AuthRoute = require('./routes/auth')
const X2250Route = require('./routes/X2250')
const SmsRoute = require('./controllers/sms')
var cors = require('cors')

// mongodb+srv://user0:<password>@db000001.f7dhn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGO_PROJECT}?retryWrites=true&w=majority`,{useNewUrlParser:true, useUnifiedTopology: true})
// mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser:true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error',(errror) =>{
    console.log(errror)
})
db.once('open',()=>{
    console.log('welcome home kim')
})
const app = express()

app.use(cors()) 
app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: true
  }))
app.use(express.json())
app.use('/uploads',express.static('uploads'))

const PORT =process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`kipchoge keep joging, keep  port: ${PORT} `)
})
app.use('/api/menu', MenuRoute)
app.use('/api/auth', AuthRoute)
app.use('/api/x2250', X2250Route)
app.use('/api/sms', SmsRoute)

