const { userModel } = require('./../../models/user');

const { generateHash } = require('./../../utils/passwords/pass');

const { validatePassword, validateEmail } = require('./../../utils/validator/validator');

const validationRequirements = {
    password: {
        minLength: 8,
        match: /^(?=.*[A-z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
    },
}


const getAllUsers = async (req, res) => {
// TODO add paginator 

    const users = await userModel.find({})
    .select('firstName lastName email avatarId role createdAt updatedAt');

    return res.status(200).json({ users });
}

const getUser = async (req, res) => {
    
    const { userId } = req.params;

    const user = await userModel.findById(userId)
    .select('firstName lastName email avatarId role isDeleted createdAt updatedAt deletedAt');
    if(!user) throw Error('User not found');
    return res.status(200).json({ user });
}

const registerUser = async (req, res) => {
    
    const { firstName, lastName, email, password } = req.body;  
    if(!validateEmail(email)) throw Error('Email is not valid');
    if(!validatePassword(password, validationRequirements.password.minLength, validationRequirements.password.match)) throw Error('Password does not pass the requirements');

    const passwordHash = await generateHash(password);

    const savedUser = await userModel.create({ firstName, lastName, email, passwordHash });

    return res.json({ user: userForReturn(savedUser) });
}

const updateUser = async (req, res) => {
    
    
}


const changeUserRole = async (req, res) => {
    
    
}

const deleteUser = async (req, res) => {
    
    
}


const usersForReturn = (users) => {
    return users.map(user => userForReturn(user));
}

const userForReturn = (user) => {
    const { firstName, lastName, email, avatarId, role, createdAt, updatedAt } = user;
    return { firstName, lastName, email, avatarId, role, createdAt, updatedAt };
}

module.exports = {
    getAllUsers,
    getUser,
    registerUser,
    updateUser,
    changeUserRole,
    deleteUser,
}