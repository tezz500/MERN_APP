const express = require('express');
const app = express();
const getFile = require('../app/helpers/helpers');
app.get('/', (req, res, next)=>{
    res.sendFile(getFile('index.html'));
});

module.exports = app;