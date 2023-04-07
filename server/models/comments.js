
const mongoose = require('mongoose');

const shema = new mongoose.Schema({
    userId: String,
    pieceId: String,
    author: String,
    comment: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
      },
},
    { timestamps: true }
);

const commentRepertoirePieceModel = mongoose.model('CommentRepertoire', shema);

module.exports = { commentRepertoirePieceModel }