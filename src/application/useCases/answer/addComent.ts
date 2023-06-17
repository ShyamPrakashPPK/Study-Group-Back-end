export default function addComment(questionId:any, answerId:any, userId:any, comment:any, dbRepository:any) {
    if (!questionId) {
        const error = new Error('question_id is required');
        throw error;
    }

    if (!comment) {
        const error = new Error('comment is required');
        throw error;
    }

    if (!userId) {
        const error = new Error('userid  is required');
        throw error;
    }

    if (!answerId) {
        const error = new Error('answerId  is required');
        throw error;
    }

    return dbRepository.addComment(questionId, answerId, userId, comment).then((response:any) => {
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