const adminAuth = (req, res, next) => {
    console.log("Admin auth is getting checked");
    const token = "xyniudniz";
    const isAdminAuthorized = token ==="xyz";
    if(!isAdminAuthorized){
        res.status(401).send("unauthorized request");
    }else{
        next();
    }
} 

module.exports = {
    adminAuth,
};