const express = require("express");
const app = express();

app.get("/getUserData", (req , res)=>{
   
    try {
        throw new Error("hjhdnjn");
        res.send("user data sent");
    } catch (err) {
        res.status(500).send("something went wrong")
    }
})




app.listen(4502 , ()=>{
    console.log("server is successfully listening on port 4502...");
    
})