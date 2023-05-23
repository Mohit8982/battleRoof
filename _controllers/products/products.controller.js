const router = require('express').Router();
const service = require('./products.service');

router.get('/manageProducts', service.manageProducts);
router.get('/easyPay', service.easyPay);
router.get('/kinaPay', service.kinaPay);
router.get('/flexPay', service.flexPay);

module.exports = router;