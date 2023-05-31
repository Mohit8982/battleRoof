const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    email:{ type: String, required: true },
    rank:{type: String, required: false},
    region:{type: String, required: false},
    country:{type: String, required: false},
    state:{type: String, required: false},
    city:{type: String, required: false},
    balance:{type: Number, required: true},
    isActive:{ type: Boolean, default: true }
},
{ timestamps: true });

module.exports = mongoose.model('users', schema);