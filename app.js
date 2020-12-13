const express = require('express');
const app = express();

//middleware
app.use('/posts',()=>{
    console.log('this is a middleware running')
})

//routes 
app.get('/', (req, res)=>{
    res.send('we are home')
})

//post example
app.get('/posts',(req, res)=>{
    res.send('we are on post')
})

//server
app.listen(3000);