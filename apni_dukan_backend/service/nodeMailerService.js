import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendOtpToAdmin = async (toEmail, otp) => {
  console.log(toEmail);
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const mailOptions = {
    from: `"Admin Verification" <${testAccount.user}>`,
    to: toEmail,
    subject: "Your One time OTP",
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h3>OTP Verification</h3>
        <p>Your OTP code is:</p>
        <h2 style="color:#007bff;">${otp}</h2>
        <p>It is valid for 5 minutes.</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`OTP sent to ${toEmail}`);

    console.log("Preview URL: ", nodemailer.getTestMessageUrl(info));

    return info;
  } catch (error) {
    console.error("Error sending OTP email:", error.message);
    throw error;
  }
};

export default sendOtpToAdmin;
