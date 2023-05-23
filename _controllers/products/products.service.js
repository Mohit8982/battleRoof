const db = require('../../_helpers/db');

exports.manageProducts = (req, res) =>{
    try {
        const userInfo = req.session;
        res.render('pages/products', { title: `PRODUCTS`, userInfo : userInfo });
    } catch (error) {
        res.render('error', { title: `Error`, error: error });
    }
}

exports.easyPay = (req, res) =>{
    try {
        const userInfo = req.session;
        res.render('pages/easyPay', { title: `Easy Pay`, userInfo : userInfo })         
    } catch (error) {
        res.render('error', { title: `Error`, error: error });
    }
}

exports.kinaPay = (req, res) =>{
    try {
        const userInfo = req.session;
        res.render('pages/kinaPay', { title: `Kina Pay`, userInfo : userInfo })         
    } catch (error) {
        res.render('error', { title: `Error`, error: error });
    }
}

exports.flexPay = (req, res) =>{
    try {
        const userInfo = req.session;
        res.render('pages/flexPay', { title: `Flex Pay`, userInfo : userInfo })         
    } catch (error) {
        res.render('error', { title: `Error`, error: error });
    }
}

exports.commonLogin = (req, res)=>{
    try {

        
        
    } catch (error) {
        return res.json({
            status : 2,
            message: "error",
            error: error.toString()
        })
    }
}