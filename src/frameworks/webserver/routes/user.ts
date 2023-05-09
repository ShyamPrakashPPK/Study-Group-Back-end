import express from "express";
import userController from "../../../adapters/controllers/userControllers";
import { userDbRepository } from "../../../application/repositories/userDbRepository ";
import { userRepositoryMongoDB } from "../../database/mongoDb/repositories/userRepositoryMongoDb";


const userRouter = () => {
    const router = express.Router();

    const controller = userController(userDbRepository, userRepositoryMongoDB)
    
    router.get('/', controller.getUser)
    
    return router 
}

export default userRouter