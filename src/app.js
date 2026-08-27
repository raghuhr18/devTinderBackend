const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");
const connectDB = require("./config/database");
const User = require("./models/User");

const app = express();
app.use(express.json());

// app.use("/admin", adminAuth);
// app.use("/user", userAuth);
app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User Created Successfully");
  } catch (error) {
    res.status(500).send("Error creating user");
  }
});

app.get("/user", async (req, res) => {
  try {
    const userEmail = req.body.email;
    const user = await User.find({ email: userEmail });
    if (user.length === 0) {
      return res.status(404).send("User not found");
    } else {
      res.send(user);
    }
    S;
  } catch (error) {
    res.status(400).send("Cannot find user with the given email");
  }
});

app.get("/feed", async (req, res) => {
  const users = await User.find();
  if (users.length === 0) {
    return res.status(404).send("No users found");
  } else {
    res.send(users);
  }
});

app.delete("/delete", async (req, res) => {
  const userId = req.body.id;
  try{
    const deleteduser = await User.findByIdAndDelete(userId);
    if(!deleteduser) {
      return res.status(404).send("User not found");
    }
    res.status(200).send("User Deleted From the Database Successfully")
  } catch (error) {
    res.status(400).send("Cannot delete user with the given id");
  }
})

app.patch("/user", async (req, res) => {
  const userId = req.body.id;
  const updateData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { runValidators: true });
    if (!updatedUser) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(400).send("Cannot update user with the given id");
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
