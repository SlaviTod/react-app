const userRouter = require('./user');
const authRouter = require('./auth');

module.exports = (app) => {
    app.use('/api/users', userRouter);
    app.use('/api/auth', authRouter);
    
}