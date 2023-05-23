const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId : { type : Schema.Types.ObjectId, required : true},
    creditAmt: { type: Number, required: true }
},
{ timestamps: true });

module.exports = mongoose.model('adsWatchHistory', schema);