const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    account:{
        type:String,
        required:true,
        unique:true
    },
    balance: {
        type: Number,
        default: 1000
    }
})

const customerList = new mongoose.model("customer", customerSchema);
module.exports = customerList;
