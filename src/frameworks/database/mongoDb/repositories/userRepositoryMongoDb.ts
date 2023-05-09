import { UserInterface } from "../../../../types/userInterface";
import User from "../models/userModel"


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
        await User.findById(id).populate(["coursesAsStudent", "coursesAsTeacher"]);

    const getUser = async (id: string) =>
        await User.findById(id)



   
   

    return {
        getUserByEmail,
        addUser,
        getUserById,
        getUser
    };
}

export type UserRepositoryMongoDB = typeof userRepositoryMongoDB