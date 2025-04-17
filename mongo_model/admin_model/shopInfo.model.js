import mongoose from "mongoose";


const ShopInfoSchema = mongoose.Schema({
    shopName:{
        type:String,
        required:true,
    },
    bussinessCateogry:{
        type:String,
        required:true,
    },
    branches:{
        type:String,
    },
    employeeCount:{
        type:String,
        required:true
    },
    

});

const ShopInfo = mongoose.model("ShopInfo", ShopInfoSchema);
export default ShopInfo;

