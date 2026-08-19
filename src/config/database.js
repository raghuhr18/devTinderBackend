const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://NamasteNodeJS:8CYsGxzghiEwgFC1@cluster0.ucsxjik.mongodb.net/devTinder"
    );
}


module.exports = connectDB;