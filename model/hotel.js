const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  location: {
    type: mongoose.Schema.ObjectId,
    ref: "Location",
  },

  address: {
    type: String,
  },

  NumberOfRooms:{
    type:Number,
    required:true,
  },
/*  photos: [
    {
      url: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],*/
 
  



});

module.exports = mongoose.model("Hotel", HotelSchema);
