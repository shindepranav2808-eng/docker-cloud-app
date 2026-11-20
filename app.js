const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Welcome! My Docker Application is Deployed Successfully.");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});