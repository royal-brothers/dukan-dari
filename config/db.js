import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGOURL = process.env.MONGO_URL;

const dbConnection = async()=>{
    try {
        await mongoose.connect(MONGOURL);
        console.log(`DB Connectection Successfuliy!...`)
    } catch (error) {
        console.log(`DataBase connection Failed!..`);
        console.log(error);

    }
};

export default dbConnection;
