import chatController from "../../../adapters/controllers/chatController";
import chatDbRepository from "../../../application/repositories/chatDbRepository";
import chatDbRepositoryMongoDB from "../../database/mongoDb/repositories/chatRepositoryMongoDb";
import {userDbRepository} from "../../../application/repositories/userDbRepository ";
import {userRepositoryMongoDB} from "../../database/mongoDb/repositories/userRepositoryMongoDb" 
import express from "express";



// export default function chatRouter() {
//     const router = express.Router();
// }

const chatRouter = (express:any) => {
    const router = express.Router();

    const controller = chatController( 
        chatDbRepository,
        chatDbRepositoryMongoDB,
        userDbRepository,
        userRepositoryMongoDB
    )

    router.route('/users').get(controller.fetchAllUsers);
    router.route('/currentUser').get( controller.fetchCurrentUser);
    router.route('/messages/:email').get( controller.fetchAllMessages);
    

    return router
}

export default chatRouter