const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
firstname:String,
lastname:String,    
age:Number,    
content: {
type: String,
required: true
},
date: {
type: Date,
default: Date.now
}
})
module.exports = mongoose.model('TodoTask',todoTaskSchema);