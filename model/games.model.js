const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
   gameName : {type : String, required : true},
   gameType : {type : String, required: true},
   bannerUrl : {type : String, required: true},
   isActive : {type: Boolean, default: true}
},
{ timestamps: true });

module.exports = mongoose.model('allGames', schema);