import { adminRouter } from "./adminRoutes.js";

const initializeEndPoints = (app) => {
    app.use("/admin", adminRouter );
  };
  
export default initializeEndPoints;
