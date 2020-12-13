const express = require('express');
const router =express.Router();

//post example
router.get('/', (req, res) => {
    res.send('we are on post')
})

module.exports = router;