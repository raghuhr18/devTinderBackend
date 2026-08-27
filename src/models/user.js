const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');

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
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is not valid");
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isStrongPassword(value, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
                throw new Error("Password is not strong enough");
            }
        }
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
        validate(value) {
            if (!validator.isURL(value)) {
                throw new Error("Photo URL is not valid");
            }
        }
    },
    about: {
        type: String,
        default: "No information provided",
    },
    skills: {
        type: [String],
        validate: {
            validator: function (skills) {
                return skills.length <= 5;
            },
            message: "Skills cannot exceed 5"
        }
    }
    },
    {
        timestamps: true
    });

module.exports =  mongoose.model('User', userSchema);