const adminAuth =  (req, res, next) => {
    console.log("admin middleware is being checked");
    const token = "xyz";
    const isAuthorized = token === "xyz";
    if(!isAuthorized) { 
        res.status(401).send("Unauthorized");
    } else {
        next();
    }
}
const userAuth =  (req, res, next) => {
    console.log("user middleware is being checked");
    const token = "xyzabc";
    const isAuthorized = token === "xyzabc";
    if(!isAuthorized) { 
        res.status(401).send("Unauthorized");
    } else {
        next();
    }
}

module.exports = { adminAuth, userAuth };