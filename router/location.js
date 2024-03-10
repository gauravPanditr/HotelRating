const express = require('express');

const router=express.Router();
const Location=require('../model/location');

router.post('/',async(req,res)=>{
      
    try {
       let location=new Location({
        name:req.body.name,
        description:req.body.description,
        


       });
       await location.save();
       if(location){
        res.send(location);
       }
       


    } catch (error) {
        console.log(error); 
    }
   


});

router.get('/get',async(req,res)=>{
  const location=await Location.find();
  if(location){
    res.send(location);
   }


});



module.exports=router;



