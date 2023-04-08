
const mongoose = require('mongoose');

const { category } = require('../data/category');

const shema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: Object.values(category),
    },
    videoLinks: [String],
    translations: {
        en: {
            name: {
                type: String,
                required: true,
                minLength: [2, 'Piece name should be at least 2 characters long!'],
                maxLength: [50, 'Piece name should be up to 50 characters long!'],
                match: [/^[A-Za-zА-Яа-я .,/:!-]+$/, 'Piece name is not valid!'],
            },
            author: {
                type: String,
                // minLength: [2, 'Author name should be at least 2 characters long!'],
                maxLength: [50, 'Author name should be up to 50 characters long!'],
                match: [/^[A-Za-zА-Яа-я -]+$/, 'Author name is not valid!'],
            },
            arrangement: {
                type: String,
                // minLength: [2, 'Arrangement name should be at least 2 characters long!'],
                maxLength: [50, 'Arrangement name should be up to 50 characters long!'],
                match: [/^[A-Za-zА-Яа-я -]+$/, 'Arrangement name is not valid!'],
            },
            description: {
                type: String,
            },
        },
        bg: {
            name: {
                type: String,
                required: true,
                minLength: [2, 'Piece name should be at least 2 characters long!'],
                maxLength: [50, 'Piece name should be up to 50 characters long!'],
                match: [/^[A-Za-zА-Яа-я .,/:!-]+$/, 'Piece name is not valid!'],
            },
            author: {
                type: String,
                // minLength: [2, 'Author name should be at least 2 characters long!'],
                maxLength: [50, 'Author name should be up to 50 characters long!'],
                match: [/^[A-Za-zА-Яа-я -]+$/, 'Author name is not valid!'],
            },
            arrangement: {
                type: String,
                // minLength: [2, 'Arrangement name should be at least 2 characters long!'],
                maxLength: [50, 'Arrangement name should be up to 50 characters long!'],
                match: [/^[A-Za-zА-Яа-я -]+$/, 'Arrangement name is not valid!'],
            },
            description: {
                type: String,
            },
        },
    },
    createdFromId: String,
    createdFromName: String,
    isDeleted: {
        type: Boolean,
        default: false,
      },
},
    { timestamps: true }
);

const repertoirePieceModel = mongoose.model('Repertoire', shema);

module.exports = { repertoirePieceModel }