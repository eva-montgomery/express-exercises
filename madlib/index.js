// Madlib
// Part 1
// Write an http server that uses the value of req.url as part of a greeting.

// For example, if the address in the browser is http://localhost:3000/oakley, the page should show the text Hello, Oakley! 

const http = require('http');
const PORT = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('*', (req, res) => {
    res.send(`Hello, ${req.url.slice(1)}!`);
});

server.listen(PORT, () => {
    console.log(`Listening ${PORT}`);
});