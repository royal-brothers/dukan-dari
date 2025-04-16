
import mongoose from "mongoose";

const adminPinStoreSchema = mongoose.Schema({
    setPin:{
        type:String,
        required:true,
    },
});

const AdminPinStore = mongoose.model("AdminPinStore", AdminPinStore);
export default AdminPinStore;






