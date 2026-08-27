const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
    },
    lastName: {
        type: String,
        minlength: 2,
        maxlength: 100,
    },
    email: {    
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        validate(value) {
            if(!["male", "female", "other"].includes(value)) {
                throw new Error("Gender is not valid");
            }
    }},
    photoURL: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    about: {
        type: String,
        default: "No information provided",
    },
    skills: {
        type: [String],
    }
},
    {
        timestamps: true
    });

module.exports =  mongoose.model('User', userSchema);