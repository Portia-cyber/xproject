const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//post example
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }

})

router.get('/specific', (req, res) => {
    res.send('specific post')
})
router.get('/', async (req, res) => {
    try {
        const posts = await post.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
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
    } catch (err) {
        res.json({ message: err })
    }
})

//get specific post 

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(res.params.postId)
        res.json(post)
    } catch (err) {
        res.json({ message: err })
    }
})

//delete post 

router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: res.params.postId })
        res.json(removePost)
    } catch (err) {
        res.json({ message: err })
    }
})

//update post 
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            {
                _id: req.params.postId
            },
            {
                $set: { title: req.body.title }
            }
        )
        res.json(updatePost)
    } catch (err) {
        res.json({
            message: err
        })
    }
})
module.exports = router;

