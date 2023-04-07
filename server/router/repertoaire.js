const router = require('express').Router();

const repertoireController = require('./../controlers/repertoire/repertoire');
const commentsController = require('./../controlers/repertoire/comments/comments_R');

const {
    authenticateToken,
    isUserOwner,
    isAdminOrOwner,
    isAdminOrMember,
    isAdminOrMemberOrAuthor,
} = require('./../controlers/auth/authenticateToken');

router.get('',  repertoireController.getAllRepertoirePieces); 
router.get('/:pieceId', repertoireController.getRepertoirePiece);
router.get('/:pieceId/comments', commentsController.getAllComments);
router.get('/:pieceId/comments/:commentId', commentsController.getComment);

router.post('', [authenticateToken, isAdminOrMemberOrAuthor], repertoireController.addRepertoirePiece);
router.post('/:pieceId', [authenticateToken], commentsController.addComment);

router.put('/:pieceId', [authenticateToken, isAdminOrMember], repertoireController.updateRepertoirePiece);
router.put('/:pieceId/comments/:commentId', [authenticateToken, isUserOwner], commentsController.updateComment);

router.delete('/:pieceId', [authenticateToken, isAdminOrMember], repertoireController.deleteRepertoirePiece);
router.delete('/:pieceId/comments/:commentId', [authenticateToken, isAdminOrOwner], commentsController.deleteComment);

module.exports = router;
