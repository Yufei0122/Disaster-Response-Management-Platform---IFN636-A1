
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    reportId:{type:String,required:true,unique:true},
    name: { type: String, required: true},
    email: { type: String, required: true},
    title: { type: String, required: true },
    context: { type: String },
    date:{type:Date,required:true},
    address: { type: String,required:true },
});

module.exports = mongoose.model('Report', reportSchema);
