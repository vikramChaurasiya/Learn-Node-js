const http = require('http')
const server = http.createServer((req,res) =>{
    console.log(req.url,req.method, req.headers);
    if(req.url==='/'){
        res.setHeader('content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title> Myntra Home </title> </head>');
        res.write('<body><h1>Welcome to myntra home Page</h1></body>');
        res.write('</html>')
        return res.end();
    } else if(req.url ==='/men'){
        res.setHeader('content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title> Myntra men </title> </head>');
        res.write('<body><h1>Welcome to myntra men Page</h1></body>');
        res.write('</html>')
        return res.end();
    } else if(req.url ==='/women'){
        res.setHeader('content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title> Myntra women </title> </head>');
        res.write('<body><h1>Welcome to myntra women Page</h1></body>');
        res.write('</html>')
        return res.end();
    } else if(req.url === '/kids'){
        res.setHeader('content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title> Myntra kids </title> </head>');
        res.write('<body><h1>Welcome to myntra kids Page</h1></body>');
        res.write('</html>')
        return res.end();
    } else if(req.url ==='/cart'){
        res.setHeader('content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title> Myntra cart </title> </head>');
        res.write('<body><h1>Welcome to myntra cart Page</h1></body>');
        res.write('</html>')
        return res.end();
    }
})

const PORT = 3003;
server.listen(PORT, () =>{
    console.log(`server running on address http://localhost:${PORT}`);
    
})