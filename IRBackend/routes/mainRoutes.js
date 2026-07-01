const express = require('express');
const router = express.Router();

let idea;

router.get('/main', (req, res) => {
    console.log('get all')
    // call backend retrieve all fcn
    res.status(200).json({
        message: 'TEMP for data retrieval'
    });
})

router.get('/:id', (req, res) => {
    console.log('get single')
    console.log(req.params.id)
    // call backend retrieve single fcn
    res.status(200).json({
        message: 'Retrieve single Idea'
    });
})

router.post('/create', (req, res) => {
    console.log('post')
    idea = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }
    // call backend create fcn
    res.status(200).json({
        message: 'Idea successfully created!'
    });
})


router.put("/:id/update", (req, res) => {
    console.log('put')
    idea = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }
    // call backend update fcn
    res.status(200).json({
        message: 'Idea successfully updated!'
    })
});

router.delete("/:id/delete", (req, res) => {
    console.log('delete')
//     call delete fcn
    res.status(200).json({
        message: 'Idea successfully deleted!'
    })
})

module.exports = router;