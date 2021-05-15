const path = require('path');
const routes = require('express').Router();


routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = routes;