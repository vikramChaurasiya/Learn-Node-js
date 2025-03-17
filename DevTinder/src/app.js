const express = require("express");

const app = express();

app.use("/",(req, res) => {
    res.send("Namaste from the dashboard");
})

app.listen(3000, ()=>{
    console.log("server is sucessfully listening on port 3000...");
});
    