const express = require('express');
const app = express();
const mongoose = require('mongoose')
require ('dotenv/config')

//middleware
//app.use('/posts',()=>{
//  console.log('this is a middleware running')
//})

//connect to db
mongoose.connect('',
 { useNewUrlParser: true }, () => console.log('connected to DB'))


//routes 
app.get('/', (req, res) => {
    res.send('we are home')
})

//post example
app.get('/posts', (req, res) => {
    res.send('we are on post')
})

//server
app.listen(3000);