const express = require('express');
const router = express.Router();


// server.post("/create", mainRoutes);
// server.put("/:id/update", mainRoutes);
// server.delete("/:id/delete", mainRoutes);

router.get('/main', (req, res) => {
    console.log('get all')
    res.status(200).json({
        message: 'TEMP for data retrieval'
    });
})

router.get('/:id', (req, res) => {
    console.log('get single')
    console.log(req.params.id)
    res.status(200).json({
        message: 'Retrieve single Idea'
    });
})

router.post('/create', (req, res) => {
    console.log('post')
    let newIdea = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }
    res.status(200).json({
        message: 'New idea successfully created!'
    });
})

module.exports = router;