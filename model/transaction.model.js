const mongoose = require('mongoose');
const dataTables = require('mongoose-datatables')

const schema = new mongoose.Schema({
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        tournamentId:{
            type: mongoose.Schema.Types.ObjectId,
            required: false
        },
        admin_id:{
            type: mongoose.Schema.Types.ObjectId,
            required: false
        },  
        filterType:{
            type: Number,  //0: Tournament Register, 1: Tournament Won, 2: Tournament Refund, 3: Wallet Debit, 6: Wallet Added, 6 : Wallet Withdrwal, 7: Payment Revert, 8 : Added From Ads
            required: false
        },
        addedBy_name:{
            type: String,
            required: false
        },
        previous_amount:{
            type: Number,
            required: true
        },
        current_amount:{
            type: Number,
            required: true
        },
        transaction_amount:{
            type: Number,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        transaction_date:{
            type: String,
            required: true
        },
        transaction_time:{
            type: String,
            required: true
        },
        transaction_status:{
            type: String,
            required: true
        },
        reqType: {
            type: String,
            required: false
        }
    },
    {
        versionKey : false
    });

schema.plugin(dataTables);
module.exports = mongoose.model('wallet_history', schema);