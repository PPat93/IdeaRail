const express = require('express');
const router = express.Router();

router.get('/main', (req, res) => {
    console.log('get')
    res.status(200).json({
        message: 'Hello World!'
    });
})

module.exports = router;