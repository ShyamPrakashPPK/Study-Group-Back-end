import reportEntity from '../../../entities/report';

export default function reportQuestionById(questionId:any, userId:any, reason:any, dbRepository:any) {
    if (!questionId) {
        const error = new Error('question_id is required');
        throw error;
    }

    if (!userId) {
        const error = new Error('question_id is required');
        throw error;
    }

    const newReport = reportEntity(questionId, userId, reason);

    return dbRepository.reportQuestionById(newReport);
}