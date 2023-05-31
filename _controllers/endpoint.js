const initializeEndPoints = (app) => {
    app.use('/', require('./indexed/index.controller'));
    app.use('/user', require('./users/user.controller'));
    app.use('/transactions', require('./transactions/tran.controller'));
}

module.exports = initializeEndPoints;