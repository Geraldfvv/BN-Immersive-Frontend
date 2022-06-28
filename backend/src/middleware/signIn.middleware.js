const throwError = require("../helpers/error.helper");
const { db } = require("../config/connection.config");
const Users = db.collection("Users");

userValidate = async (req, res, next) => {
    let errors = {};
    const { fullName, id, idPhoto, incomeSource, email, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // Queries to validate unique ids and emails
    const uniqueId = await Users.where("id", "==", id).get();
    const uniqueEmail = await Users.where("email", "==", email).get();

    // Email required, email format and unique
    if (!email) {
        errors.email = "Email is required!";
    } 
    else if (!uniqueEmail.empty) {
        errors.email = "Email already used!"
    }
    else if (!emailRegex.test(email)){
        errors.email = "This is not a valid email format!";
    }

    if (Object.keys(errors).length === 0) {
        next();
    } else {
        throw Error(errors);
    }
};

module.exports = userValidate;
