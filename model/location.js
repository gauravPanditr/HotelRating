const { default: mongoose } = require("mongoose");

const LocationSchema=new mongoose.Schema({
   name:{
    type:String,
    required:true,
   },
    description:{
        type:String,
        required:true,
    },
});

module.exports=mongoose.model('Location',LocationSchema);