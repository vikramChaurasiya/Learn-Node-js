const express = require("express");
const app =  express();
// Handle Auth Middleware for all GET POST, .....request
app.use("/admin", (req, res, next)=>{
    const token = "xyz";
    const isAdminAuthorized = token ==="xyz";
    if(!isAdminAuthorized){
        res.status(401).send("unauthorized request");
    }else{
        next();
    }
})

app.get("/admin/getAllData", (req , res)=>{
    res.send("All data sent")
})

app.get("/admin/getDelete", (req , res)=>{
    res.send("Deleted a user")
})

app.listen(4500, ()=>{
    console.log("server is successfully runing on port 4500....");
    
})