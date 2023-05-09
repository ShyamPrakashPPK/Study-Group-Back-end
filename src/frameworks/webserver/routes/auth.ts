import express from "express";
import authController from "../../../adapters/controllers/authControllers";
import { adminDbRepository } from "../../../application/repositories/adminDbRepository";
import { userDbRepository } from "../../../application/repositories/userDbRepository ";
import { authServiceInterface } from "../../../application/services/authServiceInterface";
import { adminRepositoryMongoDB } from "../../database/mongoDb/repositories/adminRepositoryMongoDb";
import { userRepositoryMongoDB } from "../../database/mongoDb/repositories/userRepositoryMongoDb";
import { authService } from "../../services/authService";



const authRouter = () => {
    const router = express.Router();

    const controller = authController(
        adminDbRepository,
        adminRepositoryMongoDB,
        authServiceInterface,
        authService,
        userDbRepository,
        userRepositoryMongoDB
    );

    router.post('/admin-login', controller.loginAdmin);

    router.post('/register', controller.registerUser);

    router.post('/user-login', controller.loginUser);

    return router
}

export default authRouter