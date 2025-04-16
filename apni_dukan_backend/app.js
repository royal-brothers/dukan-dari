import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db.js";
import cookieParser from "cookie-parser";
import initializeEndPoints from "./route/index.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.text({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());


dbConnection();

initializeEndPoints(app);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});

