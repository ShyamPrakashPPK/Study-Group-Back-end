import { HttpStatus } from "../../../types/httpStatus";
import AppError from "../../../utils/appError";
import { UserDbInterface } from "../../repositories/userDbRepository ";

export const findAllUsers = async (dbRepositoryUser: ReturnType<UserDbInterface>) => {
    console.log("reached here");
    
    const users: any = await dbRepositoryUser.getAllUser()
    
    console.log(users,"users grom usecase>>>user>>");
    
    if (!users) {
        throw new AppError("user not found", HttpStatus.BAD_REQUEST)
    }
    return users
}


