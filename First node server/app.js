const http = require('http');

const server = http.createServer((req, res) =>{
    console.log(req); 
})

server.listen(3000);

// function requestListener(req, res){
//     console.log(req);
// }


// http.createServer(function(req, res){
//     console.log(req); 
// })