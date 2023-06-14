

export default function findAllMessages(senderEmail: any, recipientEmail: any, chatRepository: any) {
    return chatRepository.findAllMessages(senderEmail,recipientEmail)
}