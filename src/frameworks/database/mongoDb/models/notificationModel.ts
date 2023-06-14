import mongoose from "mongoose";

const Schema = mongoose.Schema;
const NotificationSchema = new Schema({
    sender: {
        
    },
    reciever: {
        
    },
    questionId: {
        
    },
    created: {
        
    }
});

const Notification = mongoose.model("Notification", NotificationSchema);

export default Notification;

