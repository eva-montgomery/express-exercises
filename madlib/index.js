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
// ------------------------------------------------
// Part 2
// In your index.js, create an array of names that deserve an extra polite greeting.

// If the value of req.url is /oakley and the array is ["Oakley", "Chris"], the page should show How wonderfully splendid it is to be in your presence again, Oakley!. You look magnificent today!

// If the value of req.url is /milla (and the array is still ["Oakley", "Chris"]), the page should show Hello, Milla!.


const greetings = ["Eva", "Peter", "Mya"];
let reqUrl = req.url.slice(1);
let content = `Hello, ${reqUrl}`;


const http = require('http');
const PORT = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get(reqUrl, (req, res) => {
    res.send(`Hello, ${req.url.slice(1)}!`);
});

app.get()

server.listen(PORT, () => {
    console.log(`Listening ${PORT}`);
});