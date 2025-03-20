const express = require("express");
const app = express();

app.use("/ab?c",(req , res)=>{
    res.send("you can sreach this path then same data acess 'Localhost:3000/abc' OR 'Localhost:3000/ac'")
})

app.use("/ab+c", (req, res)=>{
    res.send("you can sreach this path then same data acess 'Localhost:3000/abc' OR 'Localhost:3000/abbbbbbbbbbc' unlimited b")
})

app.use("/xy*cd", (req,res)=>{
    res.send("you can sreach this path then same data acess 'Localhost:3000/xycd' OR 'Localhost:3000/xyvikramcd' ")

})

app.use("/p(ab)?q",(req,res)=>{
    res.send("you can sreach this path then same data acess 'Localhost:3000/p(ab)q' OR 'Localhost:3000/pq' here (ab) is optional ")
})

app.use("/a/",(req,res)=>{
    res.send("you can sreach this path then same data acess 'Localhost:3000/a/' OR 'Localhost:3000/care,cat' here you can write anything but it has include 'a' ")
})


app.listen(3001, ()=>{
    console.log("server is sucessfully listening on port 3001...");
});
    