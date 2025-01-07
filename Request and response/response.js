const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    if (req.url === '/') {
        res.setHeader('content-Type', 'text/html');
        res.write('<html>')
        res.write('<head> <title> MY First Page </title> </head>')
        res.write('<body> <H1>Welcome to Home page</H1> </body>')
        res.write('</html>')
        return res.end();
    } else if(req.url === '/products') {
        res.setHeader('content-Type', 'text/html');
        res.write('<html>')
        res.write('<head> <title>MY First Page</title> </head>')
        res.write('<body><H1>Our Products section</H1></body>')
        res.write('</html>')
        return res.end();
    }
    res.setHeader('content-Type', 'text/html');
    res.write('<html>')
    res.write('<head> <title>MY First Page</title> </head>')
    res.write('<body><H1>Hello World</H1></body>')
    res.write('</html>')
    res.end();
})

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`server running on address http://localhost:${PORT}`);
        
})