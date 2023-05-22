import { HttpStatus } from "../../../types/httpStatus";
import AppError from "../../../utils/appError";
import { UserDbInterface } from "../../repositories/userDbRepository ";

export const findAllUsers = async (dbRepositoryUser: ReturnType<UserDbInterface>) => {
    const users = await dbRepositoryUser.getAllUser()
    console.log(users,"<============users @application/useCases/user/findAllUsers.ts");
    return users
}


