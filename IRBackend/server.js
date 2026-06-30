const express = require('express');
const server = express();
const router = express.Router();

const dbInit = require("../IRDB/dbInit.cjs");

const mainRoutes = require('./routes/mainRoutes');

dbInit();

// waiting for requests
server.listen(8080, () => {

    // temp debug
    server.use((req, res, next) => {
        console.log(req.method)
        console.log(req.path)
        next();
    })

    // set all needed headers for every response
    server.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    })

    // main page
    server.get("/main", mainRoutes);
    server.post("/create", mainRoutes);
})