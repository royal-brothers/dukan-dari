import AdminAuth from "../../mongo_model/admin_model/adminAuth.model.js";
import sendOtpToAdmin from "../../service/nodeMailerService.js";
import { count_records, insertQuery } from "../../dataBase/mongo_crud.js";

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

const adminRegistration = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (await existingAdmin(email))
      return res.status(400).json({ message: "Admin email already exist" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await sendOtpToAdmin(email, otp);
    const adminData = {
      email,
      password,
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

const loginUser = async (req,res)=> {
  try{

  }catch(err){
    console.error("Admin login error", err);
    res
    .status(500)
    .json({
      message:"some error in login Admin"
    })

    
  }

}

export default adminRegistration;
