import { UserRepositoryMongoDB } from "../../frameworks/database/mongoDb/repositories/userRepositoryMongoDb";

export const userDbRepository = (repository: ReturnType<UserRepositoryMongoDB>) => {

    const getUserByEmail = async (email: string) => await repository.getUserByEmail(email)

    const addUser = async (user: { firstName: string, lastName: string, email: string, password?: string }) => await repository.addUser(user)
    
    const getUser = async (id: string) => await repository.getUser(id)

    const getAllUser = async () => await repository.getAllUser()

    const findAllUsers = (id:string) => repository.findAllUsers(id);

    
    return {
        getUserByEmail,
        addUser,
        getUser,
        getAllUser,
        findAllUsers
    }
}

export type UserDbInterface = typeof userDbRepository;