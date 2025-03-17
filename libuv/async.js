const { log } = require("console");
const fs = require("fs");
const https = require("https");
console.log("Hello world");
let a = 1878698;
let b = 28968;
// https.get("https//:dummyjson.com/product/1",(res)=>{
//     console.log("fetched data successfully");
// }) 
setTimeout(()=>{
    console.log("Settimeout called after 5 second");
    
},5000);

fs.readFile("./file.txt", "utf8", (err,data) =>{
    console.log("file data : ", data);
    
});

function multiplyFn(x,y){
    const result = a * b;
    return result;
}

console.log(multiplyFn(a,b));
