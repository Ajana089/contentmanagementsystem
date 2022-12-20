const express = require('express'); 
const adminrouter=express.Router();
const signupdata=require('../models/signup.js');
const adminfoodctegorydata=require('../models/adminfoodcategory')
const adminfooddata=require('../models/adminnewfood')


function verifyToken(req,res,next){

    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request');
    }
    let token=req.headers.authorization.split('')[1]
    if(token==='null'){
        return res.status(401).send('Unauthorized request');
    }
        let payload=jwt.verify(token,'secretkey')
        if(!payload){
            return res.status(401).send('Unauthorized request');
        }
        req.userId=payload.subject
        next();
    
     }
    




adminrouter.get('/addusers',function(req,res){
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    signupdata.find({"isEnrolled":false})
    .then(function(books){
        res.send(books);
        //console.log(books)
    });
})

     adminrouter.put('/approvestudent',(req,res)=>{
   // console.log("data",req.body.isEnrolled);  
    id=req.body._id 
   // console.log("id="+req.body._id)

   // isEnrolled=true  
 
    signupdata.findByIdAndUpdate({   "_id":id},
    {$set:{"isEnrolled":true
        }})
    .then(function(){
        res.send();
    })
})



  adminrouter.delete('/userremove/:id',(req,res)=>{
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
   id = req.params.id;
   signupdata.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
 })

//category of food

    adminrouter.post('/addfoodcategory',function(req,res){
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    var book={ 
    category:req.body.category,
    description:req.body.description,
    remark:req.body.remark
}

 var addbook = new adminfoodctegorydata(book);
 addbook.save();

})


adminrouter.get('/selectcategory:id',function(req,res){
    res.header("Access-Control-Allow-Orgin","*");
   res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
  console.log("category"+req.params.id)
   const category = req.params.id;
   
    adminfooddata.find({"category":category})
   .then(function(books){
     
       res.send(books);

       
   });
})


    adminrouter.get('/foodcategorys',function(req,res){
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    adminfoodctegorydata.find()
    .then(function(books){
        res.send(books);
        console.log(books)
    });
})

adminrouter.get('/user:id',(req, res) => {
   res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    const id = req.params.id;
      signupdata.findOne({"_id":id})
      .then((book)=>{
          res.send(book);
      });
  })


  adminrouter.get('/foodcategory:id',(req, res) => {
    res.header("Access-Control-Allow-Orgin","*");
     res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
     const id = req.params.id;
     adminfoodctegorydata.findOne({"_id":id})
       .then((book)=>{
           res.send(book);
       });
   })


   adminrouter.delete('/categoryremove/:id',(req,res)=>{
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
   id = req.params.id;
   adminfoodctegorydata.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
 })


 adminrouter.put('/categoryupdate',(req,res)=>{
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    console.log(req.body)
    id=req.body._id,
    category= req.body.category,
    description = req.body.description,
    remark = req.body.remark
   
   adminfoodctegorydata.findByIdAndUpdate({"_id":id},
                                {$set:{"category":category,
                                "description":description,
                                "remark":remark,
                                }})
   .then(function(){
       res.send();
   })
 })


 //admin added new food

 
    adminrouter.post('/addfood',function(req,res){
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    var book={ 
        category:req.body.category,
    description:req.body.description,
    rate:req.body.rate,
    food:req.body.food,
    rating:req.body.rating,
    imageurl:req.body.imageurl
}

 var addbook = new adminfooddata(book);
 addbook.save();

})

adminrouter.get('/adminfoods',function(req,res){
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    adminfooddata.find()
    .then(function(books){
        res.send(books);
        //console.log(books)
    });
})

adminrouter.put('/adminfoodupdate',(req,res)=>{
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    console.log(req.body)
    id=req.body._id,
    category=req.body.category,
    description=req.body.description,
    rate=req.body.rate,
    food=req.body.food,
    rating=req.body.rating,
    imageurl=req.body.imageurl
   adminfooddata.findByIdAndUpdate({"_id":id},
                                {$set:{"category":category,
                                "description":description,
                                "rate":rate,
                                "food":food,
                                "rating":rating,
                                "imageurl":imageurl
                                }})
   .then(function(){
       res.send();
   })
 })


 adminrouter.delete('/adminfoodremove/:id',(req,res)=>{
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
   id = req.params.id;
   adminfooddata.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
 })


 adminrouter.get('/adminfood:id',(req, res) => {
    res.header("Access-Control-Allow-Orgin","*");
     res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
     const id = req.params.id;
     adminfooddata.findOne({"_id":id})
       .then((book)=>{
           res.send(book);
       });
   })


//    adminrouter.get('/selectcategory:id',function(req,res){
//      res.header("Access-Control-Allow-Orgin","*");
//     res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
//     const id = req.params.id;
//     console.log("id"+id)
//     // adminfoodctegorydata.find({category:req.body.c})
//     // .then(function(books){
//     //     res.send(books);
        
//     // });
// })



   




module.exports=adminrouter;
