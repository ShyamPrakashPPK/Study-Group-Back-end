import mongoose from "mongoose";

mongoose.set("strictQuery", false);


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/studyGroup');
        console.log(`MongoDB connected`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

export default connectDB;