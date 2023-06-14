import { HttpStatus } from "../../../types/httpStatus";


export default function findAllUsers(id:any, userRepository:any) { 
    if (!id) {
        const error = new Error('id is required');
        throw error;
    }

    return userRepository.findAllUsers(id).then((users:any) => { 
        try {
            if (!users) {
                const error = new Error('No user found')
                throw error
            }
            return users;
        } catch (error) {
            console.log(error);
        }
    })
}
