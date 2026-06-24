const express = require('express');
const app = express();
const router = express.Router();

const mainRoutes = require('./routes/mainRoutes');

// waiting for requests
app.listen(8080, () => {

    // temp debug
    app.use((req, res, next) => {
        console.log(req.method)
        console.log(req.path)
        next();
    })

    // set all needed headers for every response
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    })

    // main page
    app.get("/main", mainRoutes);
})