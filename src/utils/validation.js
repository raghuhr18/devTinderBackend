const validator = require('validator');

const validateSignUpData = (req) => {
    const {firstName, lastName, email, password} = req.body;

    if(!firstName) {
        throw new Error("First name is required");
    }
    if(firstName.length < 2 || firstName.length >50) {
        throw new Error("First name must be between 2 and 50 characters");
    }
    if(!validator.isEmail(email)) {
        throw new Error("Invalid email address");
    }
    if(!validator.isStrongPassword(password)) {
        throw new Error("Password is not strong enough");
    }
}

module.exports = {
    validateSignUpData
};