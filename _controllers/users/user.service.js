const db = require('../../_helpers/db');
const { hash_key, sign_token, compare } = require('../../_helpers/encryption');

exports.registerUser =  async (req, res) =>{
    try {

        const { username, name, password, mobile, email, region = "Asia", country = "India", }  = req.body;
        if (username == "" || name == "" || password == "" || mobile == "" || email == "") {
            return res.json({
                status : 2,
                message : "Please Provide all values"
            })
        }

        const hashPass = await hash_key(password)

        const registeObj = new db.User({
            username : username,
            name : name,
            password : hashPass,
            mobile : mobile,
            email : email,
            region : region,
            country: country,
            balance: 25
        })

        const token = await sign_token({value : username})
        await registeObj.save();

        return res.json({
            status: 1,
            msgType: 'success',
            message: 'Woohooo Registered Succesfully !!!!',
            token: token,
        });

    } catch (error) {
        res.json({ status : 0, message :`Error`, error: error.toString() });
    }
}

exports.loginUser = async(req, res)=>{
    try {
        const { username, password : pass} = req.body;

        if(username == '' || pass == ''){
            return res.json({
                status: 2,
                message: "Username or Password cannot be empty"
            })
        }

        const checkUser = await db.User.findOne({username : username},{password : 1, _id: 1, mobile : 1, name : 1, email: 1, balance:1});

        if(checkUser){
            return res.json({
                status: 2,
                message: "Invalid Username, please enter valid username"
            })
        }
        const { password } = checkUser;
        const checkPass = await compare(pass, password);

        if(checkPass){
            return res.json({
                status: 2,
                message: "Invalid Password, please enter valid password"
            })
        }

        const token = await sign_token({value : username})

        return res.json({
            status: 1,
            message: "Successfull",
            token: token,
            userData: checkUser
        })

    } catch (error) {
        res.json({ status : 0, message :`Error`, error: error.toString() });
    }
}

exports.addsWatch = async(req, res)=>{
    try {
        const { userId } = req.body;

        


    } catch (error) {
        res.json({ status : 0, message :`Error`, error: error.toString() });
    }
}