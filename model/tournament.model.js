const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
   tournamentId: { type : Schema.Types.ObjectId, required: true},
   userId: [{ userId : Schema.Types.ObjectId }],
   tournamentPrice: { type : String, required: true, default: 0 },
   tournamentBanner: { type : String, required: true },
   tournamentWinner: [{ userId : Schema.Types.ObjectId }],
   tournamentType: { type: String, required: true } 
},
{ timestamps: true });

module.exports = mongoose.model('tournaments', schema);