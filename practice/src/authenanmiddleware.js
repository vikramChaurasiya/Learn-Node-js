const express = require("express");
const app =  express();
const {adminAuth} = require("../middlewares/auth")
// Handle Auth Middleware for all GET POST, .....request

app.use("/admin", adminAuth)

app.get("/user" , (req , res) => {
    res.send("user data send")
})

app.get("/admin/getAllData", (req , res)=>{
    res.send("All data sent from auth protect")
})

app.get("/admin/getDelete", (req , res)=>{
    res.send("Deleted a user")
})

app.listen(4500, ()=>{
    console.log("server is successfully runing on port 4500....");
    
})