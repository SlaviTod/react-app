const { commentRepertoirePieceModel } = require('./../../../models/comments');

const getAllComments = async (req, res) => {
    try {

        const { pieceId } = req.params;

        const options = {
            pieceId,
            isDeleted: false,
        }

        const comments = await commentRepertoirePieceModel.find(options)
            .select('_id author comment updatedAt')
            .sort('-updatedAt')

        return res.json({ comments });
    } catch (err) {
        errorHandler(err, req, res);
    }
}


const getComment = async (req, res) => {
    try {
        const { pieceId, commentId } = req.params;

        const comment = await commentRepertoirePieceModel.findById(commentId, 
            null, {
            pieceId,
            isdeleted: false,
        });

        if(!comment) throw Error('Comment not found');

        return res.json({ comment });
    } catch (err) {
        errorHandler(err, req, res);
    }
}


const addComment = async (req, res) => {
    try {
        const { pieceId } = req.params;
        const { comment } = req.body;

        const commentSaved = await commentRepertoirePieceModel.create({
            comment,
            pieceId,
            userId: req.user._id,
            author: `${req.user.firstName} ${req.user.lastName}`,
        })

        return res.json({ comment: commentSaved });
    } catch (err) {
        errorHandler(err, req, res);
    }
}

const updateComment = async (req, res) => {
    try {

        const { pieceId, commentId } = req.params;

        const { comment } = req.body;

        const commentDB = await commentRepertoirePieceModel.findById(commentId, null, {
            pieceId,
            isDeleted: false,
        });

        if(!commentDB) throw Error('Comment not found');
        commentDB.comment = comment; 
        await commentDB.save();

        return res.json({ comment: commentDB });
    } catch (err) {
        errorHandler(err, req, res);
    }
}

const deleteComment = async (req, res) => {
    try {
        const { pieceId, commentId } = req.params;

        const comment = await commentRepertoirePieceModel.findById(commentId, null, {
            pieceId,
            isDeleted: false,
        });

        if(!comment) throw Error('Piece not found');
        comment.isDeleted = true;
        comment.deletedAt = new Date();
        await comment.save();

        return res.json({ success: true });
    } catch (err) {
        errorHandler(err, req, res);
    }
}

module.exports = {
    getAllComments,
    getComment,
    addComment,
    updateComment,
    deleteComment,
}