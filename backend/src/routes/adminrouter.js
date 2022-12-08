const express = require('express'); 
const adminrouter=express.Router();
const signupdata=require('../models/signup.js');
const adminfoodctegorydata=require('../models/adminfoodcategory')

adminrouter.get('/addusers',function(req,res){
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    signupdata.find({"isEnrolled":false})
    .then(function(books){
        res.send(books);
        console.log(books)
    });
})

     adminrouter.put('/approvestudent',(req,res)=>{
    console.log("data",req.body.isEnrolled);  
    id=req.body._id 
    console.log("id="+req.body._id)

   // isEnrolled=true  
 
    signupdata.findByIdAndUpdate({   "_id":id},
    {$set:{"isEnrolled":true
        }})
    .then(function(){
        res.send();
    })
})

// adminrouter.get('/:id',(req, res) => {

//     res.header("Access-Control-Allow-Orgin","*");
//     res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
//     const id = req.params.id;
//       signupdata.findOne({"_id":id})
//       .then((book)=>{
//           res.send(book);
//       });
//   })

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
 
 







module.exports=adminrouter;
