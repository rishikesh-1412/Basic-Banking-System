const mongoose = require("mongoose");

let date_ob = new Date();
let year = date_ob.getFullYear();
let month = date_ob.getMonth() + 1;

let day = date_ob.getDay() + 1;

let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

const historySchema = mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required:true
    },
    date:{
        type: String,
        default: day + "/" + month + "/" + year
    },
    time:{
        type: String,
        default: hours + ":" + minutes + ":" + seconds
    }
})

const historyList = new mongoose.model("history", historySchema);
module.exports = historyList;