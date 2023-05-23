const db = require('../../_helpers/db');
const { hash_key } = require('../../_helpers/encryption');

exports.registerCashier = async (req, res) => {
    try {
        const { username, password, companyId, name } = req.body;
        const finduser = await db.Cashier.findOne({ companyId : companyId, username: username.toLowerCase() }, { _id : 1 });

        if (finduser) {
            return res.json({
                status: 2,
                msgType: 'error',
                message: "User already exist in company"
            })
        }

        const hashed_password = await hash_key(password);
        const cashier = new db.Cashier({
            username: username.toLowerCase(),
            password: hashed_password,
            name: name,
            companyId: companyId
        })

        const cashier_data = await cashier.save();

        return res.json({
            status: 1,
            msgType: 'success',
            message: 'Woohooo Registered Succesfully !!!!',
            data: cashier_data
        });

    } catch (error) {
        return res.json({
            status: 2,
            msgType: 'error',
            message: error.toString()
        });
    }
};