
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    title: { type: String, required: true },
    description: { type: String },
    date:{type:Date,required:true},
    address: { type: String,required:true },
    submittime:{type:Date,default:Date.now,required:true},
});

module.exports = mongoose.model('Report', reportSchema);
