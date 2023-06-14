import { Server } from "socket.io"; // Import Server class
import ChatModel from "../database/mongoDb/models/chatModel";
import notificationRepositoryMongoDb from "../database/mongoDb/repositories/notifiactionRepositoryMongoDb";

export default function socketioConfig(server:any) {
    const socketio = new Server(server, {
        cors: {
            origin: '*'
        }
    });

    socketio.on('connection', (socket:any) => {
        console.log('a user connected');

        socket.on('personal-message', (message:any) => {
            console.log('Received personal message:', message);

            const newMessage = new ChatModel({
                sender: message.sender,
                recipient: message.recipient,
                text: message.text,
                created: new Date()
            });

            newMessage.save().then(() => {
                console.log('Message saved to database');
                // Broadcast the message to the sender and recipient
                socketio.emit('get-personal-message', message);
            });
        });

        socket.on('join-room', (userId:any) => {
            socket.join(userId);
        });

        socket.on('notification', async (message:any) => {
            console.log('Received personal message:', message);

            const newNotification = await notificationRepositoryMongoDb().addNotification(message.sender, message.receiver, message.questionId);
            console.log('Notification saved to database', newNotification);

            socketio.emit('send-new-notification', newNotification);
        });

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
}