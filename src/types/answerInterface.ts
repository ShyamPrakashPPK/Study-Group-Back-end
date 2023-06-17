import { ObjectId } from 'mongodb';

export interface AnswerModel {
    _id?: ObjectId;
    answer: string;
    question_id: ObjectId;
    user: ObjectId;
    date: Date;
}
