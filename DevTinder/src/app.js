const express = require("express");

const app = express();

app.use("/ab+c", (req,res)=>{
    res.send("explore routing uses ab+c")
})


// this will only handle Get call to user
app.get("/user", (req,res)=>{
    res.send({Firstname:"vikram", lastname:"Chaurasiya"})
})

app.post("/user", (req,res)=>{
    console.log("saved data to the databased");
    res.send("Data successfully saved to the databased!")
})

app.delete("/user", (req, res)=>{
    res.send("deleted successfully");
})


// this will match all the HTTP method API calls to /test
app.use("/test",(req, res) => {
    res.send("test hello");
})

app.use("/hello",(req, res)=>{
    res.send("hello hello i am from hello")
})

app.listen(3000, ()=>{
    console.log("server is sucessfully listening on port 3000...");
});
    