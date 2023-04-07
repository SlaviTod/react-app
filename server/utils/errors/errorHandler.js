const logError = (err, req, res, next) => {
    console.error(err);
    next(err);
}

const errorHandler  = (err, req, res, next) => {
    errorLogInner(err);
    res.status(err.httpStatus || 500).json({ message: err.message });
}

const errorLogInner = (err) => {
    console.log(err);
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