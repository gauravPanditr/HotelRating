const express = require("express");

const router = express.Router();
const Hotel = require("../model/hotel");
const Location = require("../model/location");


router.post("/", async (req, res) => {
  try {
   /* const hotels = [];
    const photos = req.body.photos;
    for (const hotel of photos) {
      hotels.push({
        url: hotel.url,
        description: hotel.description,
      });
    }*/
      

    const location = await Location.findById(req.body.location);
       
    let hotel = new Hotel({
      name: req.body.name,
      description: req.body.description,
      location: location,
      address: req.body.address,
      NumberOfRooms:req.body.NumberOfRooms,
    });

    await hotel.save();

    if (hotel) {
      res.send(hotel);
    } else {
      res.send("Error");
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/get", async (req, res) => {

  const hotel= await Hotel.find();

  if(hotel){
    res.send(hotel);
   }
   




});


module.exports = router;
