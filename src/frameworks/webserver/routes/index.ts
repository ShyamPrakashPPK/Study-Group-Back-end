import { Application } from "express";

import userRouter from "./user";
import authRouter from "./auth";
import userAuthMiddleware from "../middlewares/userAuthMiddleware";



const routes = (app: Application) => {
    
    app.use('/api/auth', authRouter());
    // app.use('/api/user', userAuthMiddleware, userRouter());
    app.use('/api/user', userRouter());

}

export default routes;