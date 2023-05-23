const router = require('express').Router();
const common = require('./index.service');
const { auth_route } = require('../../_middleware/autorize');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Jive Market POC' });
});

router.get('/dashboard', common.dashboard);
router.post('/register', auth_route, common.register);
router.post('/login', common.login);
router.get('/logout', common.sessionDestroy);

module.exports = router;