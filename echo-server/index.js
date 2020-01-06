// Echo Server
// Write an http server that sends a plain text response containing the value of req.url.
// For example, if the address in the browser is http://localhost:3000/hey-you, the page should show the text hey-you.

const http = require('http');
const PORT = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('*', (req, res) => {
    res.send(req.url.slice(1));
});


server.listen(PORT, () => {
    console.log(`Listening ${PORT}`);
});