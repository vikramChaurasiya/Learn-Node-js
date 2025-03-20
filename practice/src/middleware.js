const express = require("express")

const app = express();

app.use
    ("/user",(req, res, next) =>{ //it is middleware
    console.log("runn file");
    next();
    },
    (req,res,next)=>{ //it is middleware
        console.log("again");
        next();
    },
    (req,res)=>{
        res.send("user data is collect2")
    }
)

app.listen(3002, ()=>{
    console.log("server is successfully is run port 3002...");
    
})