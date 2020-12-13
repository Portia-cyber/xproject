const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
require ('dotenv/config')

app.use(bodyParser.json())

//IMPORT ROUTES

postRoute = require('./router/post')
app.use('/posts', postRoute);

homeRoute = require('./router/home')
app.use('/',homeRoute)
//middleware
//app.use('/posts',()=>{
//  console.log('this is a middleware running')
//})

//connect to db
mongoose.connect( process.env.DB_CONNECT,
 { useNewUrlParser: true }, () => console.log('connected to DB'))




//server
app.listen(3000);