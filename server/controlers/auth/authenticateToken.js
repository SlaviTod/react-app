
const { userModel } = require('./../../models/user');

const { verify_JWT } = require('./jwtoken');

const { errorHandler } = require('./../../utils/errors/errorHandler');

const { role } = require('./../../data/roles');

const authenticateToken = async (req, res, next) => {
    try {

        const header = req.headers["authorization"];
        const token = header ? header.replace('Bearer ', '') : '';

        if (!token) throw Error('Token missing');

        const valid = verify_JWT(token); 

        const user = await userModel.findById(valid.sub);

        if (!user || user.isDeleted) throw Error('User does not exist');
        req.user = user;
        return next();
    } catch (err) {
        errorHandler(err, req, res);
    }
}

const isUserOwner = async (req, res, next) => {
    try {
        const { userId } = req.params;

        if (!(req.user._id == userId)) throw Error('You are not authorised!');

        return next();
    } catch (err) {
        errorHandler(err, req, res);
    } 
}

const isAdmin = async (req, res, next) => {
    try {
        if (req.user.role !== role.admin) throw Error('You are not authorised!');

        return next();
    } catch (err) {
        errorHandler(err, req, res);
    }
}

const isAdminOrOwner = async (req, res, next) => {
    try {
        const { userId } = req.params;

        if (req.user._id !== userId || req.user.role !== role.admin) throw Error('You are not authorised!');

        return next();
    } catch (err) {
        errorHandler(err, req, res);
    }
}

const isAdminOrMember = async (req, res, next) => {
    try {
        if (![role.admin, role.member].includes(req.user.role)) throw Error('You are not authorised!');

        return next();
    } catch (err) {
        errorHandler(err, req, res);
    }
}

const isAdminOrMemberOrAuthor = async (req, res, next) => {
    try {
        if (![role.admin, role.member, role.author].includes(req.user.role)) throw Error('You are not authorised!');

        return next();
    } catch (err) {
        errorHandler(err, req, res);
    }
}


module.exports = {
    authenticateToken,
    isUserOwner,
    isAdmin,
    isAdminOrOwner,
    isAdminOrMember,
    isAdminOrMemberOrAuthor,
}
