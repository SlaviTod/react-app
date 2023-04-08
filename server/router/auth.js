const router = require('express').Router();
const authController = require('./../controlers/auth/auth');

const {
    authenticateToken,
    isUserOwner,
} = require('./../controlers/auth/authenticateToken');

router.get('/:userId', [authenticateToken, isUserOwner], authController.logout);

router.post('/', authController.login);

module.exports = router;