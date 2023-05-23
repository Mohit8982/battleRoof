const initializeEndPoints = (app) => {
    app.use('/', require('./indexed/index.controller'));
    app.use('/user', require('./users/user.controller'));
    app.use('/products', require('./products/products.controller'));
    app.use('/transactions', require('./transactions/tran.controller'));
    app.use('/cashier', require('./cashier/cashier.controller'));
}

module.exports = initializeEndPoints;