const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Welcome! My Docker Application is Deployed Successfully.");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});