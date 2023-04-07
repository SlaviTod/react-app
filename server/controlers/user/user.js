const { userModel } = require('./../../models/user');

const { generateHash, comparePass } = require('./../../utils/passwords/pass');

const { validatePassword, validateEmail } = require('./../../utils/validator/validator');

const { errorHandler } = require('./../../utils/errors/errorHandler');

const {
    usersForReturn,
    userForReturn
} = require('./formatUserData');

const validationRequirements = {
    password: {
        minLength: 8,
        match: /^(?=.*[A-z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
    },
}


const getAllUsers = async (req, res) => {
    // TODO add paginator 
    try {

        const users = await userModel.find({});

        return res.status(200).json({ users: usersForReturn(users) });
    } catch (err) {
        errorHandler(err, req, res);
    }
}

const getUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await userModel.findById(userId, '_id firstName lastName email avatarId role createdAt updatedAt', { isDeleted: false });

        if (!user) throw Error('User not found');

        return res.status(200).json({ user });
    } catch (err) {
        errorHandler(err, req, res);
    }
}

const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        if (!validateEmail(email)) throw Error('Email is not valid');
        if (!validatePassword(password, validationRequirements.password.minLength, validationRequirements.password.match)) throw Error('Password does not pass the requirements');

        const user = await userModel.findOne({ email, isDeleted: false });

        if (user) throw Error('The email is already used for registration');

        const passwordHash = await generateHash(password);

        const savedUser = await userModel.create({ firstName, lastName, email, passwordHash });

        return res.json({ user: userForReturn(savedUser) });
    } catch (err) {
        errorHandler(err, req, res);
    }
}

const updateUser = async (req, res) => {
    try {
        const { firstName, lastName } = req.body;

        const { userId } = req.params;

        const user = await userModel.findById(userId, '_id firstName lastName email avatarId role createdAt updatedAt', { isDeleted: false });

        if(!user) throw Error('User not found');

        user.firstName = firstName;
        user.lastName = lastName;
        await user.save();

        return res.json({ user });
    } catch (err) {
        errorHandler(err, req, res);
    }
}


const changeUserRole = async (req, res) => {
    try {
        const { role } = req.body;

        const { userId } = req.params;

        const user = await userModel.findById(userId, '_id firstName lastName email avatarId role createdAt updatedAt', { isDeleted: false });

        if(!user) throw Error('User not found');

        user.role = role;
        await user.save();

        return res.json({ user });
    } catch (err) {
        errorHandler(err, req, res);
    }
}

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await userModel.findById(userId);

        if (!user) throw Error('User not found');

        user.isDeleted = true;
        user.deletedAt = new Date();
        await user.save();

        return res.status(200).json({ user: userForReturn(savedUser) });
    } catch (err) {
        errorHandler(err, req, res);
    }
}

const changeUserPass = async (req, res) => {
    try {
        const { userId } = req.params;

        const { oldPass, password } = req.body;

        const user = await userModel.findById(userId, null, { isDeleted: false });

        if (!user) throw Error('User not found');

        if (!comparePass(oldPass, user.passwordHash)) throw Error('Old pass does not match');
        if (!validatePassword(password, validationRequirements.password.minLength, validationRequirements.password.match)) throw Error('Password does not pass the requirements');

        const passwordHash = await generateHash(password);
        
        user.passwordHash = passwordHash;
        await user.save();

        return res.status(200).json({ user: userForReturn(user) });
    } catch (err) {
        errorHandler(err, req, res);
    }
}


module.exports = {
    getAllUsers,
    getUser,
    registerUser,
    updateUser,
    changeUserRole,
    deleteUser,
    changeUserPass,
}