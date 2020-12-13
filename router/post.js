const express = require('express');
const router =express.Router();
const Post = require('../models/Post');

//post example
router.get('/', (req, res) => {
    res.send('we are on post')
})

 

router.post('/',(req, res)=>{
    console.log(req.body)
})
module.exports = router;