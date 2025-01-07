const { log } = require('console');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res) => {
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head> <title> Input data</title> </head>');
        res.write('<body>')
        res.write('<h1> Enter Your Details: <h1>');

        res.write('<form action="/submit-details" method ="POST" >')
        res.write('<input type="text" name = "Username" placeholder = "Enter your name" /> <br>')

        res.write('<label for="male"> Male </label>')
        res.write('<input type="radio" id="male" name="gender" value = "male" />')

        res.write('<label for="female"> Female </label>')
        res.write('<input type="radio" id="female" name="gender" value = "female" /> <br>')
        res.write('<input type = "submit" value = "submit"> ')
        res.write('</form>')

        res.write('</body>');
        res.write('</html>');
        return res.end();

    } else if(req.url.toLowerCase() === "/submit-details" && req.method == "POST"){
        fs.writeFileSync('user.txt', 'vikram chaurasiya')
        res.statusCode = 302;
        res.setHeader('Location', '/');

    }
    res.setHeader('content-Type', 'text/html');
    res.write('<html>')
    res.write('<head> <title>MY First Page</title> </head>')
    res.write('<body><H1>Hello World</H1></body>')
    res.write('</html>')
    res.end();
})

const PORT = 3002;
server.listen(PORT, ()=> {
    console.log(`server runing on address http://localhost:${PORT}`);
})