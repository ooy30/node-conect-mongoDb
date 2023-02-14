const express = require('express')
const bodyPraser = require('body-parser')
const mongoose = require('mongoose')

const dbConfig = require('./config/mongodb.config.js')
const Customer = require('./models/customer.js')

const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended:true
}))

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url).then(()=>{
  Customer.deleteMany({},(err)=>{
    if(err){
      process.exit();
    }
    console.log('Remove');
    initCustomer();
  });
}).catch(err => {
  console.log('Cannot connect');
  process.exit();
})

app.use(cors())
require('./routes/customer.route.js')(app);

const server = app.listen(3000,()=>{
  let port = server.address().port
  console.log('run as',port);
})

function initCustomer(){
  let data = [
    {
    customerId:1001,
    fullName : 'String',
    address :'String'
    }
  ];

  for (const c of data) {
    const sc = new Customer(c);
    sc.save()
  }
  console.log('Save success');
}
