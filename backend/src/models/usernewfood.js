
const mongoose=require('mongoose');
const url = "mongodb+srv://ajana:B7oTV0GJi8wHh5HE@cluster0.pvrs8gr.mongodb.net/CONTMANAGEMENT";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); 


const Schema=mongoose.Schema;
const foodSchema=new Schema({
  
    food: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
     imageurl: {
        type: String,
    },
    rate: {
        type: String
    },

    rating: {
        type: String
    },
    

    

})


const usernewfood = mongoose.model('fooddata',foodSchema);
module.exports=usernewfood;



