import { Request, Response } from "express";
import asyncHandler from "express-async-handler"
import { UserDbInterface } from "../../application/repositories/userDbRepository ";
import { findById } from "../../application/useCases/user/findById";
import { UserRepositoryMongoDB } from "../../frameworks/database/mongoDb/repositories/userRepositoryMongoDb";
import { findByEmail } from "../../application/useCases/user/findByEmail";


const userController = (
    userDbRepository: UserDbInterface,
    userDbRepositoryImpl: UserRepositoryMongoDB
) => {

    const dbRepositoryUser = userDbRepository(userDbRepositoryImpl());

    const getUser = asyncHandler(async (req: Request, res: Response) => {
        const userId = req.body._id;
        if (userId) {
            const user = await findById(userId, dbRepositoryUser);
          
            res.json(user);
        }
    });

    const getUserByEmail = asyncHandler(async (req: Request, res: Response) => {
        const { email } = req.body
        const user = await findByEmail(email, dbRepositoryUser)
        res.json(user)
    })
 
    
    return {
        getUser,
        getUserByEmail
    };
};

export default userController;