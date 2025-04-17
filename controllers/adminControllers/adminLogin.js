 import existingAdmin from './adminRegistration.js'
 
 const adminLogin = async (req,res) =>{
    
    const {email,password} = req.body;

    if(await existingAdmin())


}