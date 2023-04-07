
const { userModel } = require('./../../models/user');

const { comparePass } = require('./../../utils/passwords/pass');
const { validateEmail } = require('./../../utils/validator/validator');
const { create_JWT } = require('./jwtoken');

const { errorHandler } = require('./../../utils/errors/errorHandler');

const {
    userForReturn
} = require('./../user/formatUserData');

const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!validateEmail(email)) throw Error('Email is not valid');

        const user = await userModel.findOne({ email, isDeleted: false });

        if (!user) throw Error('User does not exist');

        if (!comparePass(password, user.passwordHash)) throw Error('Pass does not match');

        const token = create_JWT({ sub: user._id });

        return res.json({ user: userForReturn(user), token });
    } catch (err) {
        errorHandler(err, req, res);
    }
}

// TODO save data when login and logout 
const logout = async (req, res) => {
    try {
        console.log(" ~  auth.js:30 ~ logout ~ ", req.user.email);

        return res.json({ success: true });
    } catch (err) {
        errorHandler(err, req, res);
    }
}

module.exports = {
    login,
    logout,
}