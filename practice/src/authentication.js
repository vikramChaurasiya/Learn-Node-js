const express = require("express");
const app = express();
app.get("/admin/getAllData", (req,res)=>{
    // logic of checking if the request authorized
    const token ="xyzoiioio";
    const isAdminAuthorized = token ==="xyz";
    if(isAdminAuthorized){
        res.send("All data sent");
    }else{
        res.status(401).send("unauthorized request");
    }
});

app.listen(4545,()=>{
    console.log("server is successfully listening on port 4545....");
    
});