const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    customerId:Number,
    fullName : String,
    address :String
},{
    versionKey:false
});

module.exports = mongoose.model('Customer',CustomerSchema)