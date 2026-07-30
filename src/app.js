const express = require("express");

const app = express();

app.use("/test", (req, res) => {
    res.send("response started")
})

app.listen((7777), () => {
    console.log("Server started listing to port");
    
})