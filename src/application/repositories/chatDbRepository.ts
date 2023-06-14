

export default function chatDbRepository(repository: any) {
    const findAllMessages = (senderEmail:any, recipientEmail:any) => repository.findAllMessages(senderEmail, recipientEmail);

    return {
        findAllMessages
    }
}