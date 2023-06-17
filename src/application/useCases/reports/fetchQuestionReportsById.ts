export default function fetchQuestionReportsById(questionId:any, dbRepository:any) {

    if (!questionId) {
        const error = new Error('questionId is required');
        throw error;
    }

    return dbRepository.fetchQuestionReportsById(questionId);
}