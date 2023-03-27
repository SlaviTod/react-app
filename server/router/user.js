const router = require('express').Router();
const userController = require('./../controlers/user/user');
const avatarController = require('./../controlers/user/avatar');

router.get('', userController.getAllUsers);
router.get('/:userId', userController.getUser);
router.get('/:userId/avatar/:avatarId', avatarController.uploadAvatar);

router.post('', userController.registerUser);

router.put('/:userId', userController.updateUser);

router.patch('/:userId', userController.changeUserRole);

router.delete('/:userId', userController.deleteUser);
router.delete('/:userId/avatar/:avatarId', avatarController.deleteAvatar);

module.exports = router;