const express = require("express");
const {dbConnection} = require('./config/database');
const PORT = process.env.PORT || 3000;
const User = require("./models/user")
const app = express();


app.post("/signup", async(req, res) => {
    const user = new User ({
        firstName: "sachin",
        lastName: "tendulkar",
        emailId : "sachin@tendulkar.com",
        password: "sachin@1234"
    })


    try {
        await user.save();
        res.send("user added successfully")
    } catch (err) {
        res.status(400).send("error saving the user:"+ err.message)
    }
    
})





dbConnection()
.then(()=> {
    console.log("server is successfully connect");
    app.listen(PORT, ()=>{
        console.log(`server is sucessfully listening on port ${PORT}...`);
    }); 
})
.catch((err)=> {
    console.log("Databased ot connect",err);
    
})
