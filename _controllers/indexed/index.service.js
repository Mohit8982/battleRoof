const db = require('../../_helpers/db');
const { hash_key, compare, sign_token } = require('../../_helpers/encryption');


exports.register = async (req, res) => {
    try {
        const { username, password, name, userType, mobile, email, company, details} = req.body;

        const finduser = await db.User.findOne({ username: username.toLowerCase() }, { _id : 1 });

        if (finduser) {
            return res.json({
                status: 2,
                msgType: 'error',
                message: "Username Already Taken"
            })
        }

        const hashed_password = await hash_key(password);
        const user_data = new db.User({
            username: username.toLowerCase(),
            password: hashed_password,
            name: name,
            userType: userType,
            mobile:mobile,
            email:email,
            details: details,
            company: company
        })

        const userData = await user_data.save();

        return res.json({
            status: 1,
            msgType: 'success',
            message: 'Woohooo Registered Succesfully !!!!',
            data: userData
        });
    } catch (error) {
        return res.json({
            status: 2,
            msgType: 'error',
            message: error.toString()
        });
    }
};

exports.login = async (req, res) => {
    try {

        const { username, password, type } = req.body;
        let finduser = {}, userType, redirectUrl = '/dashboard';
       
        if(type === "true"){
            finduser = await db.User.findOne({ username: username.toLowerCase() });
        }else{
            finduser = await db.Cashier.findOne({ username: username.toLowerCase() });
            userType = 2;
            redirectUrl = '/products/easyPay'
        }

        if (!finduser) {
            return res.json({
                status: 2,
                msgType: 'error',
                message: `Username ${username} Not Found`
            });
        }

        const db_password = finduser.password;
        const checkPass = await compare(password, db_password);

        if (!checkPass) {
            return res.json({
                status: 2,
                msgType: 'error',
                message: `Invalid Password, Please Enter Correct Password To Login`
            });
        }


        const generatetoken = await sign_token({ value: `${username}_9090` }); //expiry is set 1 hour default
        let session = req.session;
        session.details = finduser;
        session.token = generatetoken;
        session.userType = userType || finduser.userType;

        return res.json({
            status: 1,
            msgType: 'success',
            message: `Login Successfull`,
            data: {
                redirectUrl: redirectUrl,
                finduser
            }
        });

    } catch (error) {
        res.render('error', { title: `Error`, error: error });
    }
};

exports.dashboard = async(req, res)=>{
    try {
        const userInfo = req.session;
        res.render('pages/dashboard', { title: 'Dashboard', userInfo : userInfo });
    } catch (error) {
        res.render('error', { title: `Error`, error: error });
    }
}

exports.sessionDestroy = async(req, res)=>{
    try {
        const userType = req.session.userType;
        req.session.destroy();
        let redirectUrl = '/'
        if(userType == 2){
            redirectUrl = '/cashier'
        }
        res.redirect(redirectUrl);
    } catch (error) {
        res.render('error', { title: `Error`, error: error });
    }
}