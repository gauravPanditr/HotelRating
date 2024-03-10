const { default: mongoose } = require("mongoose");

const RatingSchema = new mongoose.Schema({
  HotelId: {
    type: mongoose.Schema.ObjectId,
    ref: "Hotel",
  },

  Ratings: [
    {
      UserId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
      value: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
      },

      Comment: {
        type: String,
        required: true,
      },
    },
  ],

  NumberOfComments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
});
module.exports = mongoose.model("Rating", RatingSchema);
