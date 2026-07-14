const express = require('express');
const router = express.Router();
const apiMethods = require("../apiMethods");

router.get('/main', (req, res) => {
    console.log('get all')
    apiMethods.getAllIdeas()
    res.status(200).json({
        message: 'TEMP for data retrieval'
    });
})

router.get('/:id', (req, res) => {
    console.log('get single')
    console.log(req.params.id)
    apiMethods.getSingleIdea(req.params.id);
    res.status(200).json({
        message: 'Retrieve single Idea'
    });
})

router.post('/create', (req, res) => {
    console.log('post')
    let ideaVals = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        progress: req.body.progress,
        estimation: req.body.estimation
    }
    apiMethods.createNewIdea(ideaVals)
    res.status(200).json({
        message: 'Idea successfully created!'
    });
})


router.put("/:id/update", (req, res) => {
    console.log('put')
    let ideaVals = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }
    apiMethods.updateIdea(req.params.id, ideaVals);
    res.status(200).json({
        message: 'Idea successfully updated!'
    })
});

router.delete("/:id/delete", (req, res) => {
    console.log('delete')
    apiMethods.deleteIdea(req.params.id)
    res.status(200).json({
        message: 'Idea successfully deleted!'
    })
})

module.exports = router;