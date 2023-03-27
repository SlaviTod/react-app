const bcrypt = require('bcrypt');

const saltRounds = 10;

const generateHash = async (plainPass) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(plainPass, salt);
    return hash;
}

const comparePass = async (plainPass, hash) => {
    const result = bcrypt.compare(plainPass, hash);
    return result;
}

module.exports = {
    generateHash,
    comparePass,
}