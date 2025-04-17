import mongoose from "mongoose";

const employeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"message: Name is neccessary"],
        
    },
    age:{
         type:Number,
         required:true
     },
    phoneNumber:{
        type:Number,
        required:[true,"message:phone number is neccessary"],
        
    },
    address:{
        type:String,
        required:true,
    }
});

const employeModel = new mongoose.model('employeinfo',employeSchema);

export default employeModel