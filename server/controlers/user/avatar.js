const { avatarModel } = require('./../../models/avatar');
const { userModel } = require('./../../models/user');

const { errorHandler } = require('./../../utils/errors/errorHandler');


const getAvatar = async (req, res) => {
    try {
        const { avatarId } = req.params;
        const avatar = await avatarModel.findById(avatarId);

        return res.json({ avatar });
    } catch (err) {
        errorHandler(err);
    }
}

const uploadAvatar = async (req, res) => {
    try {
        const { userId } = req.params;
        const file = req.file;
        const { mimeType } = req.body;
        console.log("🚀 ~ file: avatar.js:23 ~ uploadAvatar ~ req.body:", req.body)

        const avatar = await avatarModel.create({
            binData: file,
            mimeType,
        });
                
        const user = await userModel.findById(userId);
        user.avatarId = avatar._id;
        user.save();

        return res.json({ avatar });
    } catch (err) {
        errorHandler(err);
    }
}

const deleteAvatar = async (req, res) => {
    try {
        const { avatarId } = req.params;
        const avatar = await avatarModel.findById(avatarId);
        avatar.isDeleted = true;
        avatar.deletedAt = new Date();
        avatar.save();

        return res.json({ success: true });

    } catch (err) {
        errorHandler(err);
    }
}

module.exports = {
    getAvatar,
    uploadAvatar,
    deleteAvatar,
}