const customer = require('./../models/customer.js');

exports.index = (req,res) => {
    res.send('<h1>Customer</h1>')
}

exports.findAll = (req,res) => {
    customer.find().then(data => {

    }).catch(err=> {
        res.status(500).send({
            msg : err.message
        })
    })
}