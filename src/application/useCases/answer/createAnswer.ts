import { ObjectId } from 'mongodb';
import { AnswerModel } from '../../../types/answerInterface';

export default async function createAnswer({
    answer,
    question_id,
    user,
    date,
    dbRepository,
}: {
    answer: string;
    question_id: ObjectId;
    user: ObjectId;
    date: Date;
    dbRepository: any; // Replace with the appropriate type
}): Promise<AnswerModel> {
    const newAnswer: AnswerModel = {
        question_id,
        answer,
        user,
        date,
    };

    return dbRepository.create(question_id, newAnswer);
}
