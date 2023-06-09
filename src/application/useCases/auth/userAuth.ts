import { authService } from "../../../frameworks/services/authService";
import { HttpStatus } from "../../../types/httpStatus";
import { UserInterface } from "../../../types/userInterface";
import AppError from "../../../utils/appError";
import { UserDbInterface } from "../../repositories/userDbRepository ";
import { AuthServiceInterface } from "../../services/authServiceInterface";


export const userRegister = async (
    user: { firstName: string, lastName: string, email: string, password: string },
    userRepository: ReturnType<UserDbInterface>,
    authService: ReturnType<AuthServiceInterface>
) => {
    console.log("reached here");

    user.email = user.email.toLowerCase();
    const isExitingEmail = await userRepository.getUserByEmail(user.email);
    if (isExitingEmail) {
        throw new AppError("existing email", HttpStatus.UNAUTHORIZED);
    }
    user.password = await authService.encryptPassword(user.password);
    const { _id: userId } = await userRepository.addUser(user);

    const token = authService.generateToken(userId.toString());

    console.log("reached at user auth",token,"<--token generated",user );
    
    const userData = {
        FirstName: user.firstName,
        LastName:user.lastName,
        Email: user.email,
        tocken: token,
    };
    return {
        status: true,
        message: "user exist",
        tocken: token,
        user: userData,
    };
}

export const userLogin = async (
    email: string,
    password: string,
    userRepository: ReturnType<UserDbInterface>,
    authService: ReturnType<AuthServiceInterface>
) => {
    const user: UserInterface | null = await userRepository.getUserByEmail(email)
    if (!user) {
        throw new AppError("this user doesn't exist", HttpStatus.UNAUTHORIZED)
    }
    const isPasswordCorrect = await authService.comparePassword(password, user.password)
    if (!isPasswordCorrect) {
        throw new AppError("Sorry,your password was incorrect, please double check your password", HttpStatus.UNAUTHORIZED)
    }
    const token = authService.generateToken(user._id.toString())
    return token
}