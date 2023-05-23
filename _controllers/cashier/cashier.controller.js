const router = require('express').Router();
const cashierService = require('./cashier.service');

/* GET home page. */
router.get('/', (req, res) => {
    res.render('cashierLogin', { title: 'Jive Market POC' });
});



router.post('/registerCahier', cashierService.registerCashier);

module.exports = router