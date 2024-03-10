const express= require('express');

const router=express.Router();

const User= require('../model/user');
router.post('/',async (req,res)=>{
 
  try {
     const {username,email,password}= req.body;
     
     let user= new User({
      username:username,
      email:email,
      password:password,
     })

   await user.save();

   if(user){
    res.send('Authecation Successfully');
   }
  else{
    res.send("Error");
  }
  


  } catch (error) {
    console.log(error);
  }
 



});

router.get('/get',async(req,res)=>{
   try{
  const user= await User.find();
     if(user){
      res.send(user);
     }   
    else{
      res.send(error);
    }



   }catch(error){
    console.log(error);
   }

});




module.exports= router;
