import findAllUsers from "../../application/useCases/chat/findAllUsers";
import {findById} from "../../application/useCases/user/findById";
import findAllMessages from "../../application/useCases/chat/findAllMessages";
import { findByEmail } from "../../application/useCases/user/findByEmail";



export default function chatController(
    chatDbRepository:any,
    chatDbRepositoryImpl:any,
    userDbRepository:any,
    userDbRepositoryImpl:any
) {
    const userRepository = userDbRepository(userDbRepositoryImpl());
    const chatRepository = chatDbRepository(chatDbRepositoryImpl());

    const fetchAllUsers = (req: any, res: any) => {
        findAllUsers(userRepository)
            .then((users:any) => res.json(users))
            .catch((err:any) => console.log(err))
    }

    const fetchCurrentUser = (req:any, res:any) => {
        const id = req.body.id;
        findById(id, userRepository)
            .then((user) => res.json(user))
            .catch(err => console.log(err))
    }

    const fetchAllMessages = (req:any, res:any) => {
        const senderEmail = req.user.email;
        console.log(senderEmail,"sender email................");
        
        const recipientEmail = req.params.email;
        console.log(recipientEmail,"recip email.................");
        
        findAllMessages(senderEmail, recipientEmail, chatRepository)
            .then((messages:any) => res.json(messages))
            .catch((err:any) => console.log(err))
    }

    return {
        fetchAllUsers,
        fetchCurrentUser,
        fetchAllMessages
    }
}