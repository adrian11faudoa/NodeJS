const express = require('express');

const app = express();

app.use(middleware1);

function middleware1 (req, res, next) {
    console.log('I am a middleware');
    next();
}

function errorHandler (err, req, res, next) {
    if (err) {
        res.send('<h1>There was an error, try again</h1>')
    }
}

function standardExpressCallback (req, res, next) {
    console.log('I am the standard Express function');
    res.send('<h1>Hello World</h1>')
}

app.get('/', standardExpressCallback);

app.use(errorHandler);

app.listen(3000);