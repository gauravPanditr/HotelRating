const express = require('express');
const router = express.Router();
const Rating = require('../model/rating');
const User = require('../model/user');
const Hotel = require('../model/hotel');


router.get('/',async(req,res)=>{
   
 
 

});




router.post('/',async(req,res)=>{
  const {HotelId,Ratings}=req.body;

  const hotel= await Hotel.findOne({ name:HotelId});
  const rating= [];
  for(const data of Ratings){
    const user = await User.findById(data.UserId);
    const ratings= {
         UserId:user,
        value:data.value,
        Comment:data.Comment,

    }
    rating.push(ratings);
  }
  let newratings=new Rating({
     HotelId:hotel._id,
    Ratings:rating,
  })
  ;
  await newratings.save();

  if(newratings){
    res.send(newratings);
  }
  

});

module.exports=router;