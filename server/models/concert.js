
const mongoose = require('mongoose');

const shema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, 'Concert name should be at least 2 characters long!'],
        maxLength: [50, 'Concert name should be up to 50 characters long!'],
        match: [/^[A-Za-zА-Яа-я .,/:!-]+$/, 'Concert name is not valid!'],
    },
    description: {
        type: String,
    },
    location: {
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        country: {
            type: String,
        },
        mapLink: {
            type: String,
        },
    },
    date: {
        type: String,
    },
    imageIds: [String],
    isDeleted: {
        type: Boolean,
        default: false,
      },
},
    { timestamps: true }
);

const concertModel = mongoose.model('Concert', shema);

module.exports = { concertModel }