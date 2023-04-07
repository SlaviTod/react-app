const router = require('express').Router();
const multer  = require('multer');
const upload = multer();

const userController = require('./../controlers/user/user');
const avatarController = require('./../controlers/user/avatar');

const {
    authenticateToken,
    isUserOwner,
    isAdmin,
    isAdminOrOwner
} = require('./../controlers/auth/authenticateToken');

router.get('', [authenticateToken, isAdmin], userController.getAllUsers);
router.get('/:userId', [authenticateToken, isUserOwner], userController.getUser);
router.get('/:userId/avatar/:avatarId', [authenticateToken, isAdminOrOwner], avatarController.getAvatar); 

router.post('', userController.registerUser);
router.post('/:userId/password', [authenticateToken, isUserOwner], userController.changeUserPass);
router.post('/:userId/avatar', upload.single('avatar'), [authenticateToken, isUserOwner], avatarController.uploadAvatar);

router.put('/:userId', [authenticateToken, isUserOwner], userController.updateUser);

router.patch('/:userId', [authenticateToken, isAdmin], userController.changeUserRole);

router.delete('/:userId', [authenticateToken, isAdmin], userController.deleteUser);
router.delete('/:userId/avatar/:avatarId', [authenticateToken, isUserOwner], avatarController.deleteAvatar);

module.exports = router;