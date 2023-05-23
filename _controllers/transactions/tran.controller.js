const router = require('express').Router();

// public api routes
router.get('/', (req, res)=>{
    try {
        const userInfo = req.session;
        res.render('pages/transactions', { title: `Transactions`, userInfo : userInfo });        
    } catch (error) {
        res.render('error', { title: `Error`, error: error });
    }
});

module.exports = router