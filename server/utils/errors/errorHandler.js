const logError = (err, req, res, next) => {
    console.error(err);
    next(err);
}

const errorHandler  = (err, req, res, next) => {
    res.status(err.httpStatus || 500).json({ message: err.message });
}

const isTrustedError = (err) => {
    // if(err instanceof )
    return false;
}

module.exports = {
    logError,
    errorHandler,
    isTrustedError,
}