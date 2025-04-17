 import existingAdmin from './adminRegistration.js';
 import { find_one } from '../../dataBase/mongo_crud.js';
 import AdminAuth from '../../mongo_model/admin_model/adminAuth.model.js';
 
 const adminLogin = async (req,res) =>{
    
    const {email,password} = req.body;

    try{
        if(await existingAdmin(email)){
            find_one(AdminAuth)
    
        }
    
    }catch(err){
        console.error("some error in login user",err)
        res
        .status(500)
        .json({
         message:"user and password in not metched"
        })

    }

}