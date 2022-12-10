
const mongoose=require('mongoose');
const url = "mongodb+srv://ajana:B7oTV0GJi8wHh5HE@cluster0.pvrs8gr.mongodb.net/CONTMANAGEMENT";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); 


const Schema=mongoose.Schema;
const catSchema=new Schema({
    // id1: {
    //     type: String,
    // },
    category: {
        type: String,
    },
    description: {
        type: String,
    },
    remark: {
        type: String,
    },

})


const userfoodctegorydata = mongoose.model('usercategorydata',catSchema);
module.exports=userfoodctegorydata;



