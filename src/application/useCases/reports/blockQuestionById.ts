export default function blockQuestionById(questionId:any, questionRepository:any) {

    if (!questionId) {
        const error = new Error('questionId is required');
        throw error;
    }

    return questionRepository.blockQuestionById(questionId).then((res:any) => {
        if (res.status)
            return { status: false };
        else
            return { status: true };
    })
}