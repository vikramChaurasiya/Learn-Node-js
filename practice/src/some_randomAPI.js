
//it is find user through searching email 
app.get("/user", async(req,res)=>{
    const userEmail = req.body.emailId;
    try {
      const users = await User.findOne({emailId: userEmail});
      if (users.length === 0) {
        res.status(404).send("user can't found");
      }else{
        res.send(users)
      }
    } catch (err) {
      res.status(400).send("something went wrong" +err.message)
    }
  })
  
  //it has all without any searching same like feed
  app.get("/feed", async(req, res)=>{
    try {
      const users = await User.find();
      res.send(users)
    } catch (err) {
      res.status(400).send("something went wrong"+err.message)
    }
  })
  
  //delete user from the databased 
  
  app.delete("/user" , async(req,res) =>{
    const userId = req.body.userId;
    try {
      const user = await User.findByIdAndDelete({_id:userId});
      res.send("user deleted successfully")
    } catch (err) {
      res.status(400).send("somthing went wrong"+err.message)
    }
  })
  
  //update date from database.
  app.patch("/user/:userId", async(req,res)=>{
    const userId = req.params?.userId;
    const data = req.body;
  
    try {
      const ALLOWED_UPDATES = [
        "photoUrl",
        "about",
        "gender",
        "age",
        "skills",
      ];
      const isUpdateAllowed = Object.keys(data).every((k)=>
        ALLOWED_UPDATES.includes(k)
      );
      if(!isUpdateAllowed){
        throw new Error("Update not allowed")
      }
      if(data?.skills.length > 10){
        throw new Error("Skills cannot more than 10 ")
      }
      const user = await User.findByIdAndUpdate({_id:userId}, data ,{
        returnDocument:'after',
        returnValidators:true,
      });
      console.log(user);
      res.send("User is successfully updated")
    } catch (err) {
      res.status(400).send("UPDATE FAILED "+err.message)
    }
  })
  
  app.patch("/users  ", async (req,res)=>{
    const userEmail = req.body.emailId;
    const data = req.body;
    
    try {
      await User.findOneAndUpdate({emailId:userEmail}, data);
      res.send("user data is successfully updated ")
    } catch (err) {
      res.status(400).send("something went wrong" + err.message)
    }
  
  })