const express = require("express");
const {adminAuth, userAuth} = require("./middlewares/auth");
const connectDB = require("./config/database");

const app = express();

app.use("/admin", adminAuth);
app.use("/user", userAuth);

connectDB()
.then(() => {
    console.log("Database connected");
  app.listen(7777, () => {
    try {
      console.log("Server is running on port 7777");
    } catch (error) {
      console.error("Error starting server:", error);
    }
  });
});