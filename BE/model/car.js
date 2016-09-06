var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CarSchema = new Schema ({
    company:{
        type:String,
        required : true
    },
    nameOfCar: {
        type:String,
        required:true
    },
    years: {
        type:Number,
        required:true
    },
    color:String,
    comment:String
});

module.exports = mongoose.model("Car", CarSchema);