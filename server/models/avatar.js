const mongoose = require('mongoose');

const shema = new mongoose.Schema({
    binData: Buffer,
    isDeleted: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
)

const avatarModel = mongoose.model('Avtar', shema);

module.exports = { avatarModel }