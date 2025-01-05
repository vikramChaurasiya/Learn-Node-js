const http = require('http');

const server = http.createServer((req, res) =>{
    console.log(req); 
    process.exit(); //this used for stope server
})
const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`server runung on address http://localhost:${PORT}`);
    
})


// function requestListener(req, res){
//     console.log(req);
    // server.listen(3000);
// }


// http.createServer(function(req, res){
//     console.log(req); 
// })