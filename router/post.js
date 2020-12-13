const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//post example
router.get('/', (req, res) => {
    res.send('we are on post')
})

router.get('/specific', (req, res) => {
    res.send('specific post')
})

router.post('/', async (req, res) => {
    //console.log(req.body)
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try {

        const savePost = await post.save()
        res.json(savePost);
    }catch(err){
        res.json({message: err})
    }
})
module.exports = router;