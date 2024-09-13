const http = require('http');

const server = http.createServer((req, res) => {
    // http message
    // 1. start-line check
    // 2. header
    // 3. body
    if (req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>This is the home page</h1>');
        res.end();
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>Sorry</h1>');
        res.end();
    }
    
})

server.listen(3000);