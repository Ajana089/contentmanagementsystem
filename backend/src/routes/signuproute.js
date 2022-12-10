const express = require('express'); 
const signuprouter=express.Router();
const signupdata=require('../models/signup.js')
const bcrypt=require('bcrypt');//to encrypt password

ademail='admin@gmail.com'
adpassword='admin123'
user="admin"




//     signuprouter.post('/signup',(req,res)=>{

       
    
//             res.header("Access-Control-Allow-Orgin","*");
//             res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')

//               var user={
//                 name: req.body.name,
//                 email: req.body.email,
//                 password:req.body.password,
//                 number: req.body.number,
//                 qualification: req.body.qualification,
//                 specialisation: req.body.specialisation,
//                 isEnrolled: req.body.isEnrolled,
//                 gender:req.body.gender,
//                 user:req.body.user,
                   
//                 }
//                 const usersign = new signupdata(user);
//                 usersign.save()
           
        
            
// })
signuprouter.post('/signup',async (req,res)=>{

    try{
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
   // let uID = uniqueID();

      //encryption password using bcrypt
       bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            return res.json({success:false,message:'Give password'})
        }

        else
        {
            var user={

           // id: uID,
            name: req.body.name,
            email: req.body.email,
            password:hash,
            number: req.body.number,
            qualification: req.body.qualification,
            specialisation: req.body.specialisation,
            isEnrolled: req.body.isEnrolled,
            gender:req.body.gender,
            users:req.body.users
           }
           
          
        
           
            const usersign = new signupdata(user);
            usersign.save((err,d)=>{
                if(err){
                    res.status(401).json({
                        message: 'Failed to create new user'
                    })
                } else{
                    res.status(200).json({
                        message: 'User created'
                    })
                }
            })
          
 
 
        } })

    }
    catch(err){
        console.log("error", err)
        res.status(500)
        res.json(err);
    }




})


signuprouter.post('/login',(req,res)=>{
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')

    if(req.body.email==="admin@gmail.com"&&req.body.password==="admin123")
    {
        return res.status(200).json({success:true,message:"Sucessful login",useradmin:"admin"})

    }

    else
    {
        console.log(req.body.email)
    
    signupdata.find({email:req.body.email})
    .exec()
    .then((result)=>{
           if(result.length<1){
          return  res.status(404).res.json({success:false,message:'user not found'})
           }
           const user1=result[0];

           //checking approval of admin
            if(user1.isEnrolled===false){

                return res.status(404).json({success:false,message:"Not approved by the Admin"})
              

            }
            

           //comparing pasword
           

           bcrypt.compare(req.body.password,user1.password,(err,ret)=>{
            if(ret){

                //return res.status(200).json({success:true,message:"Sucessful login",name:result[0].name, user:result[0].user,token})
              
                //return res.status(200).json({success:true,message:"you are succcessfully login"})
                console.log("users"+user1.users)
              return res.status(200).json({success:true,message:"Sucessful login",users:user1.users})

            }
            else{

                return res.status(404).json({success:false,message:"Password is not matching"})

            }


           })


    }).
    catch((err)=>{
        res.json({success:false,message:'err'})
    })

}



})






        
            
           
    module.exports=signuprouter;
