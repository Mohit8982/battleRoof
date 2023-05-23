const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    email:{ type: String, required: true },
    rank:{type: String, required: false},
    region:{type: String, required: true},
    country:{type: String, required: true},
    state:{type: String, required: true},
    city:{type: String, required: true},
    balance:{type: Number, required: true},
    isActive:{ type: Boolean, default: true },
    userType: { type: Number, default: 0, required: true}
},
{ timestamps: true });

module.exports = mongoose.model('users', schema);