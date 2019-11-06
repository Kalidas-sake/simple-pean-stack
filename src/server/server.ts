const express = require('express');

const hostname = 'localhost';
const port = 3000;
const server = express();

server.get('/api/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
});

server.listen(port, hostname, () => {
    console.log(`Server runnint at http://${hostname}:${port}/`);
});