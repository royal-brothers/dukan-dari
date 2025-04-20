import mongoose from "mongoose";

const adminAuthSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true, 
     },
     password:{
        type:String,
        required:true
     },
     otp:{
      type:String
     }
});

const AdminAuth = mongoose.model("AdminAuth", adminAuthSchema);
export default AdminAuth;



