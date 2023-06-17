export default function addLikeAnswer(questionId:any, answerId:any, userId:any, dbRepository:any) {
    if (!questionId) {
        const error = new Error('question_id is required');
        throw error;
    }

    if (!answerId) {
        const error = new Error('answerId  is required');
        throw error;
    }
    console.log(dbRepository)

    return dbRepository.addLikeAnswer(questionId, answerId, userId, dbRepository).then((response:any) => {
        try {
            if (!response) {
                const error = new Error('No response found');
                throw error;
            }

            return response;
        } catch (error) {
            console.log(error);
        }
    })
}