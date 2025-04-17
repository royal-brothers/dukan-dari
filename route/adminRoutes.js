import express from "express";
import adminRegistration from "../controllers/adminControllers/adminRegistration.js";

const adminRouter = express.Router();

adminRouter.post("/register-admin" , adminRegistration );

export {adminRouter};
