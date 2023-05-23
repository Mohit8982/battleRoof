const jwt = require('jsonwebtoken');


exports.auth_route = async (req, res, next) => {
    try
    {
        const token = req.session.token;
        if (token == null){
            return res.json({
                status : 4,
                message : 'Session Timeout, Redirecting to Login Page in 10s',
                redirectUrl: '/'
            });
        }
        else {
            jwt.verify(token, process.env.secret, function (err, decoded) {
                if (err) {
                    return res.json({
                        status : 4,
                        message : 'Session Timeout, Redirecting to Login Page in 10s',
                        redirectUrl: '/'
                    });
                } 
                else {
                    req.auth = decoded 
                    next()                        
                }
            });    
        }
    }
    catch (e) {
        res.render('error', {title : 'Error', error : error.toString()})
    }
};