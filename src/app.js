const express = require("express");
const {adminAuth, userAuth} = require("./middlewares/auth");

const app = express();

app.use("/admin", adminAuth);
app.use("/user", userAuth);

app.get("/admin", (req, res) => {
    throw new Error("This is an error in admin route");
    res.send("Admin route");
});

app.get("/user", (req, res) => {
    throw new Error("This is an error in user route");
    res.send("User route");
});

app.use("/public", (req, res) => {
    res.send("Public route");
});

app.use("/", (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
})
app.listen((7777), () => {
    console.log("Server started listing to port");
})