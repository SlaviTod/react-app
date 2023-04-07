const userRouter = require('./user');
const authRouter = require('./auth');
const repertoireRouter = require('./repertoire');

module.exports = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/repertoire', repertoireRouter);
    
}