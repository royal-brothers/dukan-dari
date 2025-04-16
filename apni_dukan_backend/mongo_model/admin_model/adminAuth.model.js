import mongoose from "mongoose";

const adminAuthSchema = mongoose.Schema({
    PhoneNumber:{
        type:String,
        required:true,
        unique:true, 
     },
});

const AdminAuth = mongoose.model("AdminAuth", adminAuthSchema);
export default AdminAuth;



