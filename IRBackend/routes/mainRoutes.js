const express = require('express');
const router = express.Router();

router.get('/main', (req, res) => {
    console.log('get')
    res.status(200).json({
        message: 'TEMP for data retrieval'
    });
})

router.post('/create', (req, res) => {
    console.log('post')
    res.status(200).json({
        message: 'New idea successfully created!'
    });
})

module.exports = router;