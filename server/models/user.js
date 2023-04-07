
const mongoose = require('mongoose');

const { role } = require('./../data/roles');

const shema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [2, 'First name should be at least 2 characters long!'],
        maxLength: [20, 'First name should be up to 20 characters long!'],
        match: [/^[A-Za-z-]+|[А-Яа-я-]$/, 'First name is not valid!'],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [2, 'Last name should be at least 2 characters long!'],
        maxLength: [20, 'Last name should be up to 20 characters long!'],
        match: [/^[A-Za-z-]+|[А-Яа-я-]$/, 'Last name is not valid!'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/, 'Email is not valid!'],
    },
    avatarId: String,
    role: {
        type: String,
        enum: Object.values(role),
        default: role.user,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    token_psw_r: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
      },
},
    { timestamps: true }
);

const userModel = mongoose.model('User', shema);

module.exports = { userModel }