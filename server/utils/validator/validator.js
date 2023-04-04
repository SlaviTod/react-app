const validator = require('validator');


const validatePassword = (pass, min, regEx, max) => {
    const lengthValid = validator.isLength(pass, { min, max });
    const hasPattern = regEx.test(pass);
    return lengthValid && hasPattern;
}

const validateEmail = (mail) => {
    return validator.isEmail(mail);
}

module.exports = {
    validatePassword,
    validateEmail,
}