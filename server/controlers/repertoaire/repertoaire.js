const { repertoirePieceModel } = require('./../../models/repertoair');

const { errorHandler } = require('./../../utils/errors/errorHandler');


const paginationDefault = {
    itemsPerPage: 5,
    page: 1,
}

const getAllRepertoirePieces = async (req, res) => {
    try {
        let { itemsPerPage, page } = query.params;
        if (!itemsPerPage) itemsPerPage = paginationDefault.itemsPerPage;
        if (!page) page = paginationDefault.page;

        const skip = itemsPerPage * page;

        const repertoire = await repertoirePieceModel.find({
            isDeleted: false,
        })
            .select('_id category translations')
            .limit(itemsPerPage)
            .skip(skip)
            .sort('-createdAt')

        const totalItems = await repertoirePieceModel.count({
            isdeleted: false,
        })

        return res.json({ repertoire, totalItems });
    } catch (err) {
        errorHandler(err, req, res);
    }
}


const getRepertoirePiece = async (req, res) => {
    try {
        const { pieceId } = req.params;

        const piece = await repertoirePieceModel.findById(pieceId, null, {
            isDeleted: false,
        });

        if(!piece) throw Error('Piece not found');

        return res.json({ piece });
    } catch (err) {
        errorHandler(err, req, res);
    }
}


const addRepertoirePiece = async (req, res) => {
    try {
        // const { name, category, author, arrangement, description, videoLinks, language } = req.body;
        const pieceData = req.body;

        const piece = await repertoirePieceModel.create({
            ...pieceData,
            createdFromId: req.user._id,
            createdFromName: `${req.user.firstName} ${req.user.lastName}`,
        })

        return res.json({ piece });
    } catch (err) {
        errorHandler(err, req, res);
    }
}

const updateRepertoirePiece = async (req, res) => {
    try {

        const { pieceId } = req.params;

        const { pieceData } = req.body;

        const piece = await repertoirePieceModel.findById(pieceId, null, {
            isDeleted: false,
        });

        if(!piece) throw Error('Piece not found');
        
        piece.category = pieceData.category;
        piece.translations = pieceData.translations; 
        piece.videoLinks = pieceData.videoLinks;
        await piece.save();

        return res.json({ piece });
    } catch (err) {
        errorHandler(err, req, res);
    }
}

const deleteRepertoirePiece = async (req, res) => {
    try {
        const { pieceId } = req.params;

        const piece = await repertoirePieceModel.findById(pieceId, null, {
            isDeleted: false,
        });

        if(!piece) throw Error('Piece not found');
        piece.isDeleted = true;
        piece.deletedAt = new Date();
        await piece.save();

        return res.json({ success: true });
    } catch (err) {
        errorHandler(err, req, res);
    }
}

module.exports = {
    getAllRepertoirePieces,
    getRepertoirePiece,
    addRepertoirePiece,
    updateRepertoirePiece,
    deleteRepertoirePiece,
}