import { ObjectId } from 'mongodb';

 export interface QuestionModel {
    _id?: ObjectId;
    user: ObjectId;
    title: string;
    description: string;
    date: Date;
    tags: ObjectId[];
}


