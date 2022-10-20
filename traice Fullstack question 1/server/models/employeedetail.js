const mongoose = require('mongoose')

const schema = mongoose.Schema
const employeedetailSchema = new mongoose.Schema({
    name : String ,
    designation : String ,
    review : String,
    rating : Number,
    feedback : String 
})
module.exports= mongoose.model('employeedetail' , employeedetailSchema , 'employeedetails')