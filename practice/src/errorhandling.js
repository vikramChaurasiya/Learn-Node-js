const express = require("express");
const app = express();

app.get("/getUserData", (req , res)=>{
   
    res.send("user data sent");
    throw new Error("hjhdnjn");
})

app.use("/", (err, req , res , next) => {
    if(err) {
        res.status(500).send("something went wrong")
    }
})


app.listen(4501 , ()=>{
    console.log("server is successfully listening on port 4501...");
    
})