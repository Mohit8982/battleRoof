const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected Successfully'))
    .catch (error => console.log(error));

mongoose.Promise = global.Promise;

module.exports = {
	User: require('../model/user.model'),
    Products: require('../model/products.model'),
    Transactions: require('../model/transaction.model'),
    Cashier: require('../model/cashier.model')
};