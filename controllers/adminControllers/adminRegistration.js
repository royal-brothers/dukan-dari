import AdminAuth from "../../mongo_model/admin_model/adminAuth.model.js";
import sendOtpToAdmin from "../../service/nodeMailerService.js";
import { count_records, insertQuery, } from "../../dataBase/mongo_crud.js";
import bcrypt from "bcryptjs";

async function existingAdmin(email) {
  const isExist = await count_records({
    modelName: "AdminAuth",  // Pass the model name as a string
    condition: {
      email,
    },
  });
  //console.log(isExist);
  return isExist;
}

async function findAdmin(email) {
  
  
}

const hashPassword = async (password) =>{
  const hashedPassword = await bcrypt.hash(password,10);
  return hashedPassword
}

const adminRegistration = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (await existingAdmin(email))
      return res.status(400).json({ message: "Admin email already exist" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await sendOtpToAdmin(email, otp);
    // hash the password 
      
     const hashpassword = hashPassword(password)

    const adminData = {
      email,
      hashpassword,
      otp,
    };
    const insertData = await insertQuery({
      modelName: "AdminAuth",
      data: adminData,
    });
    return res
      .status(201)
      .json({
        message: "OTP sent and admin registered. Verify OTP to complete setup.",
      });
  } catch (error) {
    console.error("Admin registration error:", error);
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
};



export {
  adminRegistration,
  existingAdmin,

} 
