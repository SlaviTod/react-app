const jwt = require('jsonwebtoken');


const { audience, issuer, secret, expiresIn, } = require('./../../config/config');


const create_JWT = (data) => {
    const token = jwt.sign({
        data,
    }, secret, { 
        audience,
        issuer,
        expiresIn });

      return token;
}

const verify_JWT = () => {
    const result = jwt.verify(token, secret, { 
        audience,
        issuer, 
    });
    return result;
}

module.exports = {
    create_JWT,
    verify_JWT,
}
