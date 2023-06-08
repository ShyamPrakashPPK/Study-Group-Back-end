import { Request, Response } from "express";
import asyncHandler from 'express-async-handler'

import adminLogin from "../../application/useCases/auth/adminAuth";
import { AdminRepositoryMongoDB } from "../../frameworks/database/mongoDb/repositories/adminRepositoryMongoDb";
import { AuthService } from "../../frameworks/services/authService";
import { AdminDbInterface, adminDbRepository } from "../../application/repositories/adminDbRepository";
import { AuthServiceInterface } from "../../application/services/authServiceInterface";
import { UserDbInterface } from "../../application/repositories/userDbRepository ";
import { UserRepositoryMongoDB } from "../../frameworks/database/mongoDb/repositories/userRepositoryMongoDb";
import { userLogin, userRegister } from "../../application/useCases/auth/userAuth";


const authController = (
    adminDbRepository: AdminDbInterface,
    adminDbRepositoryImpl: AdminRepositoryMongoDB,
    authServiceInterface: AuthServiceInterface,
    authServiceImpl: AuthService,
    userDbRepository: UserDbInterface,
    userDbRepositoryImpl: UserRepositoryMongoDB,
) => {
    const dbRepositoryUser = userDbRepository(userDbRepositoryImpl())
    const dbRepositoryAdmin = adminDbRepository(adminDbRepositoryImpl())
    const authService = authServiceInterface(authServiceImpl())



    const loginAdmin = asyncHandler(async (req: Request, res: Response) => {
        const { email, password }: { email: string, password: string } = req.body
        const token = await adminLogin(email, password, dbRepositoryAdmin, authService)
        res.json({
            status: "sucess",
            message: "admin verified",
            token,
        })
    })

    const registerUser = asyncHandler(async (req: Request, res: Response) => {
        console.log("reached at register user");
        
        const user: { firstName: string, lastName: string, email: string, password: string } = req.body
        const token = await userRegister(user, dbRepositoryUser, authService)
        res.json({
            status: "sucess",
            message: "user registration sucessfull",
            token
        })
    })
    
    const loginUser = asyncHandler(async (req: Request, res: Response) => {
        const { email, password }: { email: string, password: string } = req.body;
        const token = await userLogin(email, password, dbRepositoryUser, authService)
        res.json({
            status: "sucess",
            message: "user verified",
            token
        })
    })

    return {
        loginAdmin,
        loginUser,
        registerUser
    }
}


export default authController