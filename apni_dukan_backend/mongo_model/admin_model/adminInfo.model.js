import mongoose from "mongoose";


const adminInfo = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["Admin", "Employee"],
        default:"Admin"
    },
});

const AdminInfo = mongoose.model("AdminInfo", adminInfo);
export default AdminInfo;

