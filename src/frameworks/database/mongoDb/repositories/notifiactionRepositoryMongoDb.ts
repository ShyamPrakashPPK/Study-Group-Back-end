import NotificationModel from "../models/notificationModel";

export default function notificationRepositoryMongoDb() {
    const addNotification = (sender:any,reciever:any,questionId:any) => {
        const newNotification = new NotificationModel({
            sender: sender,
            reciever: reciever,
            questionId: questionId,
        });

        return newNotification.save().then((result:any) => {
            return NotificationModel
                .find({ _id: result._id })
                .populate(
                    {
                        path:'sender',
                        select:'username'
                    }
                 )
                .populate(
                    {
                        path: 'receiver',
                        select:'username'
                }
            )
                .populate(
                    {
                        path: 'questionId',
                        select:'title'
                }
            )
        })
    }
    return {
        addNotification
    }
}