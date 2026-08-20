const express = require("express");
const {adminAuth, userAuth} = require("./middlewares/auth");
const connectDB = require("./config/database");
const User = require("./models/User");

const app = express();

// app.use("/admin", adminAuth);
// app.use("/user", userAuth);

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Virat",
    lastName: "Kohli",
    email: "virat@kohli.com",
    password: "password123",
  });
try {
  await user.save();
  res.send("User Created Successfully");
} catch (error) {
  res.status(500).send("Error creating user");
}
});

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
})
.catch((error) => {
  console.error("Error saving the user", error);
});
