const db = require('../../_helpers/db');

exports.manageUser = async (req, res) =>{
    try {
        const userInfo = req.session;
        const allPosAdmin  = await db.User.find({userType : 0},{_id : 1, name : 1, mobile: 1, email: 1, details: 1, isActive: 1, company : 1});
        res.render('pages/users', { title: `USER'S`, userInfo : userInfo, userList : allPosAdmin });        
    } catch (error) {
        res.render('error', { title: `Error`, error: error });
    }
}

exports.registerUser = (req, res) =>{
    try {
        const userInfo = req.session;
        res.render('pages/registerPosAdmin', { title: `POS Admin`, userInfo : userInfo });        
    } catch (error) {
        res.render('error', { title: `Error`, error: error });
    }
}
