import ChatModel from "../models/chatModel";

export default function chatDbRepositoryMongoDB() {
    const findAllMessages = (senderEmail:any, recipientEmail:any) => {
        return ChatModel.find(
            {
                $and: [
                    { $or: [{ sender: senderEmail }, { sender: recipientEmail }] },
                    { $or: [{ recipient: senderEmail }, { recipient: recipientEmail }] }
                ]
            }
        )
    }

    return {
        findAllMessages
    }
}