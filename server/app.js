require('dotenv').config({path: './.env'})
const express = require('express')
const app = express()
const port = 3000
const route = require('./routes')
const cors = require('cors')
const mongoose = require('mongoose')
const error = require('./middlewares/error.js')
mongoose.connect(process.env.MONGODB_LINK,{ useNewUrlParser : true, useFindAndModify: false }, (err) => {
  if(err) {
    console.log('Error connecting to database.')
  } else {
    console.log('Connected to database!')
  }
})

app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(route)
app.use(error)
app.listen(port,() => {
  console.log(`listening on port: ${port}!`)
})