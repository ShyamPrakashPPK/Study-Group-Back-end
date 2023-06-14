import { Application } from "express";

import userRouter from "./user";
import authRouter from "./auth";
import userAuthMiddleware from "../middlewares/userAuthMiddleware";
import adminRouter from "./admin";
import chatRouter from "./chat";



const routes = (app: Application) => {
    
    app.use('/api/auth', authRouter());

    app.use('/api/admin', adminRouter());

    app.use('/api/user', userAuthMiddleware, userRouter());

    app.use('/api/chat',chatRouter)


}

export default routes;