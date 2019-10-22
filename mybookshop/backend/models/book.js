const mongoose = require('mongoose');

const bookschema = mongoose.Schema({
    title:{type:String},
    price:{type:Number},
    description:{type:String},
    author:{type:String},
    image:{type:String},
})

module.exports = mongoose.model("Book",bookschema);
