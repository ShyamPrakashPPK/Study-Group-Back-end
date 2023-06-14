import { UserInterface } from "../../../../types/userInterface";
import User from "../models/userModel"
import { ObjectId } from 'mongodb';


export const userRepositoryMongoDB = () => {

    const getUserByEmail = async (email: string) => {
        const user: UserInterface | null = await User.findOne({ email });
        return user;
    };

    const addUser = async (user: {
        firstName: string;
        lastName: string;
        email: string;
        password?: string;
    }) => {
        return await User.create(user)
    }


    const getUserById = async (id: string) =>
        await User.findById(id);

    const getUser = async (id: string) =>
        await User.findById(id)

    const getAllUser = async () => {
        console.log("reached at get all users");
        
        await User.find()        
    }

    const findAllUsers = (id:string) => {
        return User.find({ _id: { $ne: new ObjectId(id) } });
    }


   
   

    return {
        getUserByEmail,
        addUser,
        getUserById,
        getUser,
        getAllUser,
        findAllUsers
    };
}

export type UserRepositoryMongoDB = typeof userRepositoryMongoDB
